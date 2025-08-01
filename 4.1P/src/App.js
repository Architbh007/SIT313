import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
