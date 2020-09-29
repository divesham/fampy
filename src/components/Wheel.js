import React from 'react';

const Wheel = ({rotation}) =>{
    return(
        <div>
            
        <ul className={rotation.name}>
                <li>
                    <div className = "text"
                     
                    > Better luck next time! </div>
                </li>
                <li>
                    <div className = "text"
                   
                    > 2X Savings </div>
                </li>
                <li>
                    <div className = "text"
                     
                    >  ₹100 Cashback</div>
                </li>
                <li>
                    <div className = "text"
                      
                    >  ₹20 💸 </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > ₹50 💸 </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > 1.5X Savings</div>
                </li>
                <li>
                    <div className = "text"
                    
                    > 2X Savings </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > ₹50 💸</div>
                </li>
               
            </ul>
            </div>
    )
}
export default Wheel;