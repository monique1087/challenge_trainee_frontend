import React from 'react';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nome: ''};
      this.state = {mensagem:''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({nome: event.target.nome});
      this.setState({mensagem: event.target.mensagem})
    }
  
    handleSubmit(event) {
      alert('Uma mensagem foi enviada: ' + this.nome + '' + this.mensagem);
      event.preventDefault();
      console.log(alert)  
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

export default Form;

