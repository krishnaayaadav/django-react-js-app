import './App.css';
import logo from './static/images/logo.png';

import EmployeesList from './components/EmployeeList';

function App() {
  return (
    <div className="App">
      <header className="container">
       <EmployeesList />
      </header>
    </div>
  );
}

export default App;
