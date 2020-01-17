import React from 'react';
import './style.css'


export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nome: []};
      this.state = {mensagem: []};
      document.write()
    }
  
  
    handleSubmit(event) {
      event.preventDefault();  
      console.log(event)
      
    }
  
    render() {
      console.log(this.props)
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Lembranças do nosso casamento</h1>
          <label>
            <p className="nome">Nome:</p>
            <input className="nome" type="text" value={this.props.nome} onChange={this.props.handleChange} onSubmit={this.props.handleSubmit}/>
            <p className="mensagem">Mensagem:</p>
            <input className="mensagem" type='text' value={this.props.mensagem} onChange={this.props.handleChange} onSubmit/>
          <input className="button" type="submit" value="Enviar" />
          </label>
          
        </form>
      );
    }
  }


