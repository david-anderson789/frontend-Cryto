/* eslint-disable arrow-parens */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React, {
  useRef, useCallback, useState, useEffect,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import {
  formatISO,
} from 'date-fns';
import LayoutDashboard from '../../components/layoutDashboard';
import {
  ImgEdite, ImgAddTrade, ImgDateTrade, ImgValueTrade,
} from '../../components/icons/email';
import Input from '../../components/input';
import DayPicker from '../../components/input/inputDayPicker';
import SelectCurrency from '../../components/input/select';
import {
  Container, Header, ContainerModel, TopSide, BoxSide, Logo, ContainerSide, ContainerSideInfo, BotSideOne,
} from './styles';
import Modal from '../../components/modal';
import { useAuth } from '../../hooks/AuthContext';
import avatar from '../../assets/vector.svg';
import api from '../../services/api';
import Graphics from '../../components/graphics';

interface IRequest{
  id: string;
  name: string;
  image: string;
}

interface ITrades{
  currency: string;
  date: Date;
  value_trade: Number;
}

interface IListTrade{
  id: string;
  currency: string;
  initials: string;
  user_id: string;
  value_trade: Number;
  date: Date;
}

const Dashboard : React.FC = () => {
  const { user } = useAuth();

  const [currentWeek, setCurrentWeek] = useState(0);
  const [currentYear, setCurrentYear] = useState();
  const [currentMonth, setCurrentMonth] = useState();
  const [today, setToday] = useState();

  const [listPositionTrade, setListPositionTrade] = useState<IListTrade[]>([]);

  const [isModalOpen, setModalState] = React.useState(false);

  const [coin, setCoin] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index: number): void => {
    setToggleState(index);
  };

  const handleCoins = useCallback(async () => {
    const response = await api.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    );

    return setCoin(response.data);
  }, []);

  useEffect(() => {
    handleCoins();
  }, [handleCoins]);

  const options = coin.map((list: IRequest) => (
    { value: list.id, label: <div className="optionLabel"><img className="optionImgLabel" src={list.image} /><p>{list.name}</p></div> }
  ));

  const getHandle = useCallback(async () => {
    const response = await api.post('/trades/liststatistics');

    setCurrentWeek(response.data.currentWeek);
    setCurrentYear(response.data.currentYear);
    setCurrentMonth(response.data.currentMonth);
    setToday(response.data.today);
  }, []);

  const handleAddTrade = useCallback(async (data: ITrades) => {
    await api.post('/trades', {
      currency: data.currency,
      date: formatISO(data.date),
      value_trade: Number(data.value_trade),
    });
    getHandle();
  }, [getHandle]);

  const handleRemoveTrade = useCallback(async (data: ITrades) => {
    await api.post('/trades/removetrade', {
      currency: data.currency,
      date: formatISO(data.date),
      value_trade: Number(data.value_trade),
    });

    getHandle();
  }, [getHandle]);

  useEffect(() => {
    getHandle();
  }, [getHandle]);

  useEffect(() => {
    api.get('/trades/listTrades').then(
      (response) => {
        setListPositionTrade(response.data.map((list: any) => list.value_trade));
      },
    );
  }, [setListPositionTrade]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleModal = () => setModalState(!isModalOpen);
  const formRef = useRef<FormHandles>(null);
  return (
    <LayoutDashboard>
      <Container>
        <Header>
          <div className="WellComeHeader">
            <strong>Bom dia, {user.name}</strong>
            <span>Análise e estatística</span>
          </div>

          <div className="buttonHeader">
            <button type="submit">
              <ImgEdite />
              <p>Histórico</p>
            </button>
            <button onClick={toggleModal} className="addButtonTrades" type="submit">
              <ImgAddTrade />
              <p>Adicionar Trades</p>
            </button>
          </div>
        </Header>
        <Modal
          isOpen={isModalOpen}
          onClose={toggleModal}
        >
          <ContainerModel>
            <p>Adicionar Trade</p>
            <div className="GanhoPerdaTrade">
              <button
                className={toggleState === 1 ? 'active' : ''}
                type="submit"
                onClick={() => toggleTab(1)}
              >Ganho
              </button>
              <button
                className={toggleState === 2 ? 'active' : ''}
                type="submit"
                onClick={() => toggleTab(2)}
              >
                Perda
              </button>
            </div>
            <div className={toggleState === 1 ? 'activeInputTrade' : 'desableInputTrade'}>
              <Form ref={formRef} onSubmit={handleAddTrade}>

                <SelectCurrency
                  name="currency"
                  options={options}
                  placeholder="Escolha sua criptomoeda..."
                />
                <DayPicker
                  name="date"
                  type="submit"
                  icon={ImgDateTrade}
                  lang="pt-br"
                  disabled
                />
                <Input
                  name="value_trade"
                  icon={ImgValueTrade}
                  placeholder="Valor de Trade"
                />

                <button className="addButtonTrades" type="submit">
                  <ImgAddTrade />
                  <p>Adicionar Trades</p>
                </button>
              </Form>
            </div>

            <div className={toggleState === 2 ? 'activeInputTrade' : 'desableInputTrade'}>
              <Form ref={formRef} onSubmit={handleRemoveTrade}>

                <SelectCurrency
                  name="currency"
                  options={options}
                  placeholder="Escolha sua criptomoeda..."
                />
                <DayPicker
                  name="date"
                  type="submit"
                  icon={ImgDateTrade}
                  lang="pt-br"
                  disabled
                />
                <Input
                  name="value_trade"
                  icon={ImgValueTrade}
                  placeholder="Valor de Trade"
                />

                <button className="addButtonTrades" type="submit">
                  <ImgAddTrade />
                  <p>Adicionar Trades</p>
                </button>
              </Form>
            </div>

          </ContainerModel>

        </Modal>
        <TopSide>
          <ContainerSide>
            <BoxSide>
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <p>Lucro Diário</p>
              <strong>US$ {today}</strong>

            </BoxSide>
            <BoxSide>
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <p>Lucro Anual</p>
              <strong>US$ {currentYear}</strong>

            </BoxSide>
            <BoxSide>
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <p>Lucro Mensal</p>
              <strong>US$ {currentMonth}</strong>

            </BoxSide>

            <BoxSide>
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <p>Lucro Semanal</p>
              <strong>US$ {currentWeek}</strong>

            </BoxSide>
          </ContainerSide>
          <ContainerSideInfo>
            <strong>Atividades Recentes</strong>
            <div className="infoTrade">
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <strong>Novo trade adicionado<small>+US$ {listPositionTrade[listPositionTrade.length - 1]}</small></strong>
            </div>
            <div className="infoTrade">
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <strong>Novo trade adicionado<small>+US$ {listPositionTrade[listPositionTrade.length - 2]}</small></strong>
            </div>
          </ContainerSideInfo>
        </TopSide>

        <BotSideOne>
          <Graphics />
        </BotSideOne>
      </Container>
    </LayoutDashboard>
  );
};

export default Dashboard;
