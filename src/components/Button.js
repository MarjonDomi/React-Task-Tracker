import React from 'react'
import PropTypes from 'prop-types'


const Button = (props) => {

    const onClick =()=>{
       console.log('button clicked')
    }
    return (
        <button 
        onClick={()=>onClick} 
        style = {{backgroundColor: 'color'}} 
        className= 'btn'>
            {props.text}
            </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
  }
  
  Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
  }

export default Button;
