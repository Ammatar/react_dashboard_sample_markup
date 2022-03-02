import React from 'react';
import { observer } from 'mobx-react-lite';
import { store } from '../../store';
import Logo from './img/logo.svg';
import { svgs } from './svgs';
import { Link } from 'react-router-dom';
const SidebarMenu = observer(() => {
  return (
    <div className='sidebarMenu__container'>
      <div className='sidebarMenu__logo'>
        <img src={Logo} alt='Logo' />
        <div>Dashboard Kit</div>
      </div>
      {[...store.menu].map((el) => {
        return (
          <Link
            to={'/dashboard/overview'}
            className='sidebarMenu__item'
            key={el.title}
          >
            {/* <div className='sidebarMenu__item' key={el.title}> */}
            {svgs[el.alias]}
            {el.title}
          </Link>
          // </div>
        );
      })}
      <hr />
      {[...store.menuSettings].map((el) => {
        return (
          <Link
            to={'/dashboard/overview'}
            className='sidebarMenu__item'
            key={el.title}
          >
            {svgs[el.alias]}
            {el.title}
          </Link>
          // <div className='sidebarMenu__item' key={el.title}>
          // </div>
        );
      })}
    </div>
  );
});

export default SidebarMenu;
