import React from 'react';


export default class Lista extends React.Component {
    constructor(props){
        super(props);
        this.state = {nome:''};
        this.state = {mensagem:''}
    }   
    
    
    render(props){
        return (
            <div>

        <th className="list">Nome {this.props.nome}</th>
                <th className="list">Mensagem</th>
                <React.Fragment >
                    {this.props.nome}
                    {this.props.mensagem}
                </React.Fragment>
                    
            </div>
        )

        

        
    }
}