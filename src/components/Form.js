import React from 'react';
//import './Mae'

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Nome: ''};
      this.state = {Mensagem:''};


    }
  
  
    handleSubmit(event) {
      event.preventDefault();
      console.log(event)  
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome:
            <input type="text" value={this.props.nome} onChange={this.props.handleChange} />
            Mensagem:
            <input type='text' value={this.props.mensagem} onChange={this.props.handleChange}/>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }


