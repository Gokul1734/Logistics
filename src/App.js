import './App.css';

import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
