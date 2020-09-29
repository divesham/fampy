import React, { Fragment, useState} from 'react';
import Wheel from './Wheel';

   
const SpinnerApp =() =>{
    const [rotation, setRotation] = useState({
        name: 'circle',
        action:'spin'
      });

    const handleRotation = ()=>{
        console.log('circle start-rotation');
        if(rotation.name == 'circle start-rotation')
        setRotation({name:'circle stop-rotation',action:'spin'});
        else
        setRotation({name:'circle start-rotation',action:'stop'});
    }

    return(
        <div className="main">
            <div className="arrow"></div>
            <Wheel rotation={rotation} />
            <div className="spin" 
            onClick={handleRotation}>Spin</div>
        </div>
    );
};

export default  SpinnerApp;