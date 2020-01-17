import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Lista from './components/Lista'

export default class App extends React.Component {
   
  constructor(props) {
      super(props);
      this.state = {Nome:'', Monique:''}
  }

  render(props){
      return (
          <div>
              <Form />
              <Lista />
          </div>
      )   
  }
}


