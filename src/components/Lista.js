import React from 'react';


export default class Lista extends React.Component {
    constructor(props){
        super(props);
        this.state = [{props}];
    }   

    
    render(props){
        return (
            <div>

                <th>Nome</th>
                <th>Mensagem</th>
            
            </div>
        )

        

        
    }
}