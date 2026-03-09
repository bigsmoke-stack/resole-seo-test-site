import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Shoes from './pages/Shoes.jsx';
import NikeShoes from './pages/NikeShoes.jsx';
import AdidasShoes from './pages/AdidasShoes.jsx';
import PumaShoes from './pages/PumaShoes.jsx';
import SellShoes from './pages/SellShoes.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/nike-shoes" element={<NikeShoes />} />
        <Route path="/adidas-shoes" element={<AdidasShoes />} />
        <Route path="/puma-shoes" element={<PumaShoes />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/sell-your-shoes" element={<SellShoes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

