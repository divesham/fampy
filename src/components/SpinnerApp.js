import React, { Fragment, useState} from 'react';
import Wheel from './Wheel';

   
const SpinnerApp =() =>{
    const [rotation, setRotation] = useState({
        name: 'circle stop-rotation',
        arrowState:'arrow',
        action:'spin'
      });

    const handleRotation = ()=>{
        console.log('circle start-rotation');
        if(rotation.name == 'circle start-rotation')
        setRotation({name:'circle stop-rotation',arrowState:'arrow',action:'spin'});
        else
        setRotation({name:'circle start-rotation',arrowState:'arrow-move',action:'stop'});
    }

    return(
        <div className="main">
            <div className={rotation.arrowState}></div>
            <Wheel rotation={rotation} />
            <div className="spin" 
            onClick={handleRotation}>Spin</div>
        </div>
    );
};

export default  SpinnerApp;