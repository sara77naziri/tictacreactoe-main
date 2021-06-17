import React from 'react';
import Button from '@material-ui/core/Button';


const Square = props => (

<Button 

  className={`${props.winnerClass} square`}
  color="default"
  variant="contained"  
  style={{
    borderRadius: 250,
    width: "70px",
    height:"70px",
    fontSize: "30px",
    padding: "15px",
    border: '2px solid'
        }}
  onClick={props.onClick}>

  {props.value}
  
</Button>

);

export default Square;