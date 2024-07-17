import { Outlet } from 'react-router-dom';
import Header from './components/custom/Header.tsx';
import Hero from './components/custom/Hero.tsx';
import Footer from './components/custom/Footer.tsx';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
