import { Outlet } from 'react-router-dom';
import Header from './components/custom/Header.tsx';
import Hero from './components/custom/Hero.tsx';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Outlet /> 
    </div>
  );
};

export default App;
