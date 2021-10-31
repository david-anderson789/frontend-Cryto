import React, { useState, useMemo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import {
  Container, Wrapper, SideBar, Main, Header, BottonMenu,
  TopSide, Logo, MenuButton, BotSide,
} from './styled';
import {
  HomeImg, PortiFolioImg, TradeImg, LogoutImg, ConfigImg,
} from '../icons/email';

import avatar from '../../assets/vector.svg';

const LayoutDashboard: React.FC = ({ children }) => {
  const [menuActive, setMenuActive] = useState(1);

  const history = useHistory();
  const toggleTab = (index: number, route: string): void => {
    setMenuActive(index);

    history.push(`/${route}`);
  };

  return (
    <Container>
      <Wrapper>
        <SideBar>
          <TopSide>
            <Logo>
              <img src={avatar} alt="" />
            </Logo>
            <p>Menu</p>

            {/*  <NavLink
              className="menuButton"
              to="/Dashboard"
              activeClassName="active"
            >
              <HomeImg width="19" height="21" />
              <span>Visão Geral</span>
            </NavLink> */}
            <NavLink
              className="menuButton"
              to="/Dashboard"
              activeClassName="active"
            >
              <TradeImg width="19" height="21" />
              <span>Trades</span>
            </NavLink>
            <NavLink
              className="menuButton"
              to="/Portfolio"
              activeClassName="active"
            >
              <PortiFolioImg width="19" height="21" />
              <span>Portfólio</span>
            </NavLink>

          </TopSide>
          <TopSide>
            <p>Geral</p>
            <MenuButton
              className={menuActive === 4 ? 'active' : ''}
              onClick={() => toggleTab(4, 'Dashboard')}
            >
              <ConfigImg width="19" height="21" />
              <span>Configurações</span>
            </MenuButton>
            <MenuButton>
              <LogoutImg width="19" height="21" />
              <span>Sair</span>
            </MenuButton>
          </TopSide>

          <BotSide>

            <strong>40% de Desconto</strong>
            <span>Garanta todas as vantagens <br /> de ser premium</span>
            <button type="button">Assinar</button>

          </BotSide>
        </SideBar>

        <Main>
          <Header>
            <div>
              <img src={avatar} alt="avatar" />
            </div>
          </Header>
          {children}
          <div className="whiteWrapper" />
          <BottonMenu>

            <button
              type="button"
              className={menuActive === 3
                ? 'menu-tolt activediv' : 'menu-tolt'}
              onClick={() => setMenuActive(3)}
            >
              <PortiFolioImg width="27" height="24" />
            </button>

            <button
              type="button"
              className={menuActive === 2
                ? 'menu-tolt activediv' : 'menu-tolt'}
              onClick={() => setMenuActive(2)}
            >
              <TradeImg width="27" height="27" />
            </button>

            <button
              type="button"
              className={menuActive === 1
                ? 'menu-tolt activediv' : 'menu-tolt'}
              onClick={() => setMenuActive(1)}
            >
              <HomeImg width="24" height="26" />
            </button>

            <button
              type="button"
              className={menuActive === 4
                ? 'menu-tolt activediv' : 'menu-tolt'}
              onClick={() => setMenuActive(4)}
            >
              <ConfigImg width="25" height="26" />
            </button>
            <button
              type="button"
              className={menuActive === 5
                ? 'menu-tolt activediv' : 'menu-tolt'}
              onClick={() => setMenuActive(5)}
            >
              <LogoutImg width="26" height="25" />
            </button>
          </BottonMenu>

        </Main>
      </Wrapper>
    </Container>
  );
};

export default LayoutDashboard;
