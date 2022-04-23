import React from 'react';
import './Grid.css';


const getStyles = props =>{
    let str='';
    if (props.xs)
        str += `col-${props.xs} `;

    if(props.sm)
        str += `col-sm-${props.sm} `;

    if(props.md)
        str += `col-md-${props.md} `;

    if(props.lg)
        str += `col-lg-${props.lg} `;

    if(props.xl)
        str += `col-xl-${props.xl} `;

    return str;
}

const Grid = props =>{
    const {row,xs,sm,md,lg,xl} = props;

    return(<React.Fragment>
        {row ? 
        <div className='row'>{props.children}</div> 
        : 
        <div className={getStyles(props)}>{props.children}</div>
        }
            
    </React.Fragment>)
}

export default Grid;
