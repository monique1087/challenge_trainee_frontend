import React from 'react'; 


export default class Mae extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {nome: ''}
        this.state = {mensagem: ''}
    }

    render(){
        return (
            <div>
            <td>Nome {this.props.nome}</td>
            <td>Mensagem {this.props.mensagem}</td>
            </div>
        )   
    }
}




