import React  from 'react'
import './App.css';
import Home from './components/Home/Home'
import { Route , Switch } from 'react-router-dom'
import GenerateScale from './components/GenerateScale/GenerateScale'

function App() {
 
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/generateScale/:colorName' component={GenerateScale} />
      </Switch>
    </div>
  );
}

export default App;