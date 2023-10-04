
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Userdetails from './Userdetails/Userdetails';
import Dashboard from './dashboard/Dashboard'
import React from 'react';
import {data} from '../store/Data';
import { addMovies } from '../actions';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props
    store.subscribe(()=>{
      console.log("updated")
      this.forceUpdate()
    })
    store.dispatch(addMovies(data))
    console.log('state',this.props.store.getState());
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='' element={<Dashboard />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/Userdetails/:id' element={<Userdetails />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;