import React from 'react'
import HeadObject from './Head'
import Header from './Header'

const Layout = ({ children, menu }) => {
  return (
    <div>
      <HeadObject />
      <main>{children}</main>
      <Header menu={menu} />
    </div>
  );
};

export default Layout;
