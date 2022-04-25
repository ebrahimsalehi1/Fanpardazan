import React from 'react';
import "./Tooltip.css";

const Tooltip = props =>{
    const {title , children} = props;

    return (<div className='tooltip'>
        {children}
        <div className='tooltip-title'>
            {title}
        </div>
    </div>)
}

export default Tooltip;
