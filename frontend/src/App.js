import { About, Footer, Header, Skills, Testimonial, Work } from './containers';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
};

export default App;
