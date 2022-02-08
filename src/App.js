import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Todos from './Todos';
import Averagecalc from './Averagecalc';
import AddNos from './AddNos';
import MiniCalculator from './MiniCalculator';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todos></Todos>
      <Averagecalc></Averagecalc>
      
      <AddNos num1={100} num2={111}></AddNos>
      <MiniCalculator num1={120} num2={2} operation="add"></MiniCalculator>
    </div>
  );
} 

export default App;
