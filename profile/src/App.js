import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section main = {true}/>
      <Section main = {false}/>
      <Section main = {false}/>
      <footer></footer>
    </div>
  );
}

export default App;
