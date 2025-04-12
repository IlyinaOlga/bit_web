import { FC, PropsWithChildren } from 'react';
// import './Layout.css';
import { Footer, Header } from '../../components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
