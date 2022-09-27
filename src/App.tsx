import { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/global.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'Home/Home';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';

interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
