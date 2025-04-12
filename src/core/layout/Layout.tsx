import { FC, PropsWithChildren } from 'react';
import { Footer, Header } from '../../components';
import { LayoutContainer } from './Layout.styled';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
