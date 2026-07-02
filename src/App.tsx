import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Product from './pages/Product';
import CustomOrders from './pages/CustomOrders';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="collections" element={<Collections />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="custom-orders" element={<CustomOrders />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<FAQ />} />
          {/* We will add more routes here as we build them */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
