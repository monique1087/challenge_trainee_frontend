import React from 'react';


export default class Lista extends React.Component {
    constructor(props){
        super(props);
        this.state = [{props}];
    }   

    
    render(props){
        return (
            <div>

                <th className="list">Nome</th>
                <th className="list">Mensagem</th>
            </div>
        )

        

        
    }
}