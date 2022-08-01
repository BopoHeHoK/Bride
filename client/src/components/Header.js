import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Container, Nav, Navbar, } from 'react-bootstrap'
import { HOME_ROUTE, CATALOG_ROUTE, FEEDBACK_ROUTE, CONTACT_ROUTE, BASKET_ROUTE, PROFILE_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE, SCHEDULE_ROUTE } from '../utils/consts'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { Context } from '../index'

const Header = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="md" bg="light" variant="light" fontSize="32px">
      <Container>
        <Navbar.Brand>
          <Nav.Link href={HOME_ROUTE}><img src={logo} height="70" alt="Bride" className="d-inline-block align-top" /></Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-between">
          <Nav>
            <Nav.Link href={CATALOG_ROUTE}>Каталог</Nav.Link>
            <Nav.Link href={SCHEDULE_ROUTE}>Расписание</Nav.Link>
            <Nav.Link href={FEEDBACK_ROUTE}>Отзывы</Nav.Link>
            <Nav.Link href={CONTACT_ROUTE}>Контакты</Nav.Link>
          </Nav>
          {user.isAuth
            ?
            <Nav>
              {user.isAdmin !== "ADMIN"
                ?
                <Nav.Link href={BASKET_ROUTE}>Избранное</Nav.Link>
                :
                <Nav.Link href={ORDERS_ROUTE}>Заказы</Nav.Link>
              }
              <Nav.Link onClick={() => navigate(PROFILE_ROUTE)} className="me-3"> Профиль </Nav.Link>
            </Nav>
            :
            <Nav>
              <Nav.Link onClick={() => navigate(LOGIN_ROUTE)} className="me-3"> Войти </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});

export default Header;

