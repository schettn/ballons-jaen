import { FC } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/global.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Navigation from 'components/Navigation/Navigation';
import Footer from 'components/Footer/Footer';
import Dekorationens from 'pages/Dekorationens/Dekorationens';
import WirGestaltenParty from 'pages/WirGestaltenParty/WirGestaltenParty';
import Großhandel from 'pages/Großhandel/Großhandel';
import AboutUs from 'pages/AboutUs/AboutUs';
import BlogOverview from 'pages/BlogOverview/BlogOverview';
import BlogPage from 'pages/BlogPage/BlogPage';
import Faq from 'pages/Faq/Faq';
import Contact from 'pages/Contact/Contact';
import ScrollToTop from 'components/ScrollTop';
interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <Router>
      <ScrollToTop>
        <>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/grobhandels" element={<Großhandel />} />
            <Route path="/dekorations" element={<Dekorationens />} />
            <Route path="/wir-gestalten-party" element={<WirGestaltenParty />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blogs" element={<BlogOverview />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </>
      </ScrollToTop>
    </Router>
  );
};
export default App;
