import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
};

export default App;
