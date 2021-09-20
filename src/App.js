import Header from './components/Header.js';
import './App.css';
import Article from './components/Article.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hr-div"></div>
        <main>
          <Article />
        </main>
      <Footer />
    </div>
  );
}

export default App;
