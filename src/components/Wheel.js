import React from 'react';

const Wheel = ({rotation}) =>{
    return(
        <div>
            
        <ul className={rotation.name}>
                <li>
                    <div className = "text"
                     
                    > 1 </div>
                </li>
                <li>
                    <div className = "text"
                   
                    > 2 </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > 3 </div>
                </li>
                <li>
                    <div className = "text"
                      
                    > 4 </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > 5 </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > 6 </div>
                </li>
                <li>
                    <div className = "text"
                    
                    > 7 </div>
                </li>
                <li>
                    <div className = "text"
                     
                    > 8 </div>
                </li>
               
            </ul>
            </div>
    )
}
export default Wheel;