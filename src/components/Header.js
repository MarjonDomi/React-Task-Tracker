import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props,{onAdd,showAdd}) => {
   

    
    return (  
        <header className='header'>
            <h1>{props.title}</h1>                
            <Button  
            color ={showAdd ? 'red':'green'} 
            text={showAdd ? 'Close':'Add'} 
            onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracer',
};

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//     color: 'red',backgroundColor: 'black'
// }


export default Header;


