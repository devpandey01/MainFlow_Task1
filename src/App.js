import Feature from './components/features';
import Footer from './components/footer';
import Header from './components/header';
import Testimonial from './components/testimonial';
import './App.css';
// import './components/header.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <Testimonial/>
      <Footer/>
    </div>
  );
};

export default App;
