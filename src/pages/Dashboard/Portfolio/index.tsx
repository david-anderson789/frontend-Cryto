/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-indent */
import React, {
  useState, useEffect, useCallback, useRef, FormEvent,
} from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import Input from '../../../components/input';
import DayPicker from '../../../components/input/inputDayPicker';
import SelectCurrency from '../../../components/input/select';
import {
  ImgEdite, ImgAddTrade, ImgDateTrade, ImgValueTrade,
} from '../../../components/icons/email';
import LayoutDashboard from '../../../components/layoutDashboard';
import Graphics from '../../../components/graphics';
import avatar from '../../../assets/vector.svg';
import {
  Container, ContainerSideInfo, Logo, GraficsBox, Header, TopSide, BotSide,
  DisplayCurrency, ContainerModel,
} from './styled';
import 'react-circular-progressbar/dist/styles.css';
import Modal from '../../../components/modal';
import api from '../../../services/api';

interface IRequest{
  id: string;
  name: string;
  image: string;
}
interface IWallet{
  wallet: string,
}
interface IlistWallet{
  name:string;
  id: string

}
const Portfolio: React.FC = () => {
  const values = 88;
  const [coin, setCoin] = useState([]);
  const [listWallet, setListWallet] = useState([] as any);
  const [isModalOpen, setModalState] = React.useState(false);
  const [isModalOpenWallet, setModalOpenWallet] = React.useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [isSelect, setSelect] = useState('');
  const [idWalletSelect, setIdWalletSelect] = useState<string[]>([]);
  const toggleTab = (index: number): void => {
    setToggleState(index);
  };

  const formRef = useRef<FormHandles>(null);
  const handleCoins = useCallback(async () => {
    const response = await api.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
    );

    return setCoin(response.data);
  }, []);

  const options = coin.map((list: IRequest) => (
    {
      value: list.id,
      label: <div className="optionLabel">
    <img className="optionImgLabel" src={list.image} /><p>{list.name}</p>
             </div>,
    }
  ));

  useEffect(() => {
    handleCoins();
  }, [handleCoins]);

  const gethandle = useCallback(async () => {
    const response = await api.get('/portfolio');
    return setListWallet(response.data);
  }, []);

  const handleWallet = useCallback(async (data: IWallet) => {
    await api.post('/portfolio', {
      name: data.wallet,
    });
    gethandle();
    setModalOpenWallet(false);
  }, [gethandle]);

  useEffect(() => {
    gethandle();
  }, [gethandle]);

  /*   const handleSelect = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await api.get(`/walletTrades/${isSelect}`);
    console.log('entrou aki');
    return setIdWalletSelect([...idWalletSelect, response.data]);
  }, [idWalletSelect, isSelect]);

  useEffect(() => {
    handleSelect;
  }, [handleSelect]); */

  useEffect(() => {
    api.get(`/walletTrades/${isSelect}`).then(
      (response) => {
        setIdWalletSelect(response.data);
      },
    );
  }, [isSelect]);

  console.log(isSelect);
  console.log(idWalletSelect);

  const toggleModal = ():void => setModalState(!isModalOpen);
  const toggleModalWallet = ():void => setModalOpenWallet(!isModalOpenWallet);
  return (
    <LayoutDashboard>
      <Container>
        <Header>
          <div className="WellComeHeader">
            <strong>Portfólio</strong>
            <div className="SelectWallet">

                <select
                  name="select"
                  onChange={(e) => setSelect(e.target.value)}
                  style={{ border: 0, padding: 5, fontWeight: 'bold' }}
                >
               <option selected value="">Escolha sua Carteira</option>
                  {listWallet.map((list: IlistWallet) => (
                        <option key={list.id} value={list.id}>
                          {list.name}
                        </option>
                  ))}
                </select>

            </div>
          </div>

          <div className="buttonHeader">
            <button onClick={toggleModalWallet} type="submit">
              <ImgEdite />
              <p>Wallet</p>
            </button>
            <button onClick={toggleModal} className="addButtonTrades" type="submit">
              <ImgAddTrade />
              <p>Adicionar Transação</p>
            </button>
          </div>
        </Header>
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ContainerModel>
            <p>Ativos de Portfólio</p>
            <div className="GanhoPerdaTrade">
              <button
                className={toggleState === 1 ? 'active' : ''}
                type="submit"
                onClick={() => toggleTab(1)}
              >Adicionar
              </button>
              <button
                className={toggleState === 2 ? 'active' : ''}
                type="submit"
                onClick={() => toggleTab(2)}
              >
                Remover
              </button>
            </div>
            <div className={toggleState === 1 ? 'activeInputTrade' : 'desableInputTrade'}>
              <Form ref={formRef} onSubmit={() => console.log('ok')}>

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
                  name="qtd_currency"
                  icon={ImgValueTrade}
                  placeholder="Qtd. Moedas"
                />
                <Input
                  name="value_trade"
                  icon={ImgValueTrade}
                  placeholder="Valor de Trade"
                />

                <button className="addButtonTrades" type="submit">
                  <ImgAddTrade />
                  <p>Adicionar Ativos</p>
                </button>
              </Form>
            </div>

            <div className={toggleState === 2 ? 'activeInputTrade' : 'desableInputTrade'}>
              <Form ref={formRef} onSubmit={() => console.log('ok')}>

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
                    name="qtd_currency"
                    icon={ImgValueTrade}
                    placeholder="Qtd. Moedas"
                  />
                <Input
                  name="value_trade"
                  icon={ImgValueTrade}
                  placeholder="Valor de Trade"
                />

                <button className="addButtonTrades" type="submit">
                  <ImgAddTrade />
                  <p>Remover Ativos</p>
                </button>
              </Form>
            </div>

        </ContainerModel>
        </Modal>
        <Modal isOpen={isModalOpenWallet} onClose={toggleModalWallet}>
        <ContainerModel>
            <p>Configurações de Wallet</p>
            <div className="GanhoPerdaTrade">
              <button
                className={toggleState === 1 ? 'active' : ''}
                type="submit"
                onClick={() => toggleTab(1)}
              >Adicionar
              </button>
              <button
                className={toggleState === 2 ? 'active' : ''}
                type="submit"
                onClick={() => toggleTab(2)}
              >
                Remover
              </button>
            </div>
            <div className={toggleState === 1 ? 'activeInputTrade' : 'desableInputTrade'}>
              <Form ref={formRef} onSubmit={handleWallet}>

                <Input
                  name="wallet"
                  icon={ImgValueTrade}
                  placeholder="Nome para Carteira"
                />

                <button className="addButtonTrades" type="submit">
                  <ImgAddTrade />
                  <p>Criar Carteira</p>
                </button>
              </Form>
            </div>

        </ContainerModel>
        </Modal>
        <TopSide>
          <GraficsBox>
            <Graphics />
          </GraficsBox>
          <ContainerSideInfo>
            <strong>Atividades Recentes</strong>
            <div className="infoTrade">
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <strong>Novo trade adicionado<small>+US$ 120,00 </small></strong>
            </div>
            <div className="infoTrade">
              <Logo>
                <img src={avatar} alt="" />
              </Logo>
              <strong>Nova moeda adicionada a Carteira 03<small>+US$ 120,00  </small></strong>
            </div>
            <strong className="lucroPerdas">Lucros/Perdas da Carteira</strong>
            <div className="CircleProgressFlex">

              <div className="circleProgress">
                <CircularProgressbar
                  value={values}
                  maxValue={1}
                  text={`${values}%`}
                  styles={buildStyles({
                    textColor: '#000',
                    pathColor: '#3867EA',
                    trailColor: '#fff',
                  })}
                />
              </div>
            </div>

          </ContainerSideInfo>
        </TopSide>
        <BotSide>
          <DisplayCurrency>
            <h3>Seus Ativos</h3>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>QTD.</th>
                  <th>Val. Entrada</th>
                  <th>Val. Atual</th>
                  <th>Mont. Investido</th>
                  <th>Mont. Atual</th>
                  <th>Lucro/Perda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="currency">
                    <Logo>
                      <img src={avatar} alt="" />
                    </Logo> <p>Cardano</p>
                  </td>
                  <td>220 <small>ADA</small></td>
                  <td>US$ 2,50</td>
                  <td>US$ 2,60</td>
                  <td>US$ 250</td>
                  <td>US$ 260</td>
                  <td>US$ 10,0</td>

                </tr>

                <tr>
                  <td className="currency">
                    <Logo>
                      <img src={avatar} alt="" />
                    </Logo> <p>Cardano</p>
                  </td>
                  <td>150 <small>ADA</small></td>
                  <td>US$ 2,50</td>
                  <td>US$ 2,15</td>
                  <td>US$ 250</td>
                  <td>US$ 260</td>
                  <td>US$ -10,0</td>

                </tr>
              </tbody>
            </table>
          </DisplayCurrency>
        </BotSide>
      </Container>

    </LayoutDashboard>
  );
};

export default Portfolio;
