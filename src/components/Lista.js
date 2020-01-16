import React from 'react';
//import Mae from './Mae'


export default class Lista extends React.Component {
    constructor(props){
        super(props);
        this.state = {nome:''}
        this.state = {mensagem: ''}
    }


    render(){
        return (
            <div>
                <th>{this.setState.nome}</th>
                <th>{this.setState.mensagem}</th>
            </div>
        )

        

        
    }
}