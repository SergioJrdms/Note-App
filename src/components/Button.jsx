import React from 'react';
import "./Button.css";

 const Button = ({children, onClick}) => {
     return ( 
         <button onClick={onClick} className="button">
             {children}
         </button>
      );
 }
//   <Button> Adicionar{/*filho do Button */}</Button>
 export default Button;