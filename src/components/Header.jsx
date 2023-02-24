import React from 'react';
import {Link, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.css';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({user , logoutRequest}) => {
  
  const hashUser = Object.keys(user).length > 0

  const handleLogout = () => {
    logoutRequest({})
  }

  const test =  useLocation().pathname === '/login'
  const test2 =  useLocation().pathname === '/register'
  const headerClass = test ||  test2 ? 'header greenHeader' : 'header'

  console.log('holi ', headerClass)

  return (
    <header className={headerClass}>
  
      <Link to='/'>
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
  
      <div className="header__menu">
        <div className="header__menu--profile">

          { hashUser ? <img src={gravatar(user.email)} alt="" />  : <img src={userIcon} alt="" />}

          <p>Perfil</p>
        </div>
        <ul>

          {hashUser ? <li><a href="/">{user.name}</a></li> : null }
          {hashUser ?  <li><a href="/" onClick={handleLogout}>Cerrar Sesión</a></li> :     
          <li>
            <Link to='/login'>
              Iniciar Sesión
            </Link>
          </li>
          }
          
     
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => {
  return{
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
