import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
  <div className='flex flex-col h-screen'>
    <Nav className='bg-blue-500' />
    <div className='text-center p-10 mb-auto'>{props.children}</div>
    <Footer className='bg-blue-500' />
  </div>
);

// export default { Layout };
// export { Layout, Nav };
export { Layout, Nav, Footer };
