import './App.css';
import Header from './Components/Header/Header';
import QnA from './Components/QnA/QnA';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <section>
        <Shop></Shop>
      </section>
      <footer>
        <QnA></QnA>
      </footer>
    </div>
  );
}

export default App;
