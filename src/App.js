
import './App.css';
import List from './components/List';
import ToDo from './components/ToDo.js'

function App() {
  return (
    <div className="todo-app">
      <h1>ToDo App</h1>
      <List/>
     <ToDo />
    </div>
  );
}

export default App;
