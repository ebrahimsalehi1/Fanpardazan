import React from 'react';

const TextField = props =>{

    const {label} = props;

    return (<div>
        <label>{label}</label>
        <input {...props}/>
    </div>)
}

export default TextField;
