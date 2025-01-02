import React from 'react';

const Button = (props) => {
return(<>
<button type="button" onChange={props.evento}className={props.class}>{props.text}</button>
</>)
}

export default Button 