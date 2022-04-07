import React from "react";
import Clock from './clock';

function Game() {
    return (
        <div>
            Hello Wolrd
        </div>
    );
}

class Game2 extends React.Component {
    render(){
        return (<div>
                    Hello World 2
                    <Clock date={new Date()} />
               </div>
        )
    }
}


export default Game2;