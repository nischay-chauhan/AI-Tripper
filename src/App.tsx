import { BrowserRouter,  Route, RouterProvider, Routes } from 'react-router-dom';
import Header from './components/custom/Header.tsx';
import Hero from './components/custom/Hero.tsx';
import Footer from './components/custom/Footer.tsx';
import Trip from './pages/trip/Trip.tsx';



const App: React.FC = () => {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
};

export default App;
