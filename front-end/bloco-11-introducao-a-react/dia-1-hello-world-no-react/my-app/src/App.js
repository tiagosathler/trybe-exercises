// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

const array = [
  'Estudar inglês',
  'Terminar o curso de oratória da Conquer',
  'Programar a semana',
];

function App() {
  
  return (
    <ol>
      {Task('Estudar React')}
      {array.map((element) => Task(element))}
    </ol>
  );
}

export default App;
