import React from 'react';
import { SidebarMenu } from '../Shared';
import Content from './Content';

const Overview = () => {
  return (
    <div className='content__container'>
      <SidebarMenu />
      <Content />
    </div>
  );
};

export default Overview;
