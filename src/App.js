import './App.css';
import Header from './Components/Header/Header';
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
    </div>
  );
}

export default App;
