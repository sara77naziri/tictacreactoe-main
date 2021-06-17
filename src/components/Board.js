import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Square from './Square';

export default class Board extends Component {
    renderSquare(i){
        return <Square value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
    }
    render() {
        return (
         <Box  className="mainbox" bgcolor="primary" >
            <div  className="cnt">
                <div className="border-row">
                    {this.renderSquare(0)} 
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                
            </div>
        </Box>    
    
        )
    }
}