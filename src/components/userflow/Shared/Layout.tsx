import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '100vh',width:"100%",overflow:"hidden" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
