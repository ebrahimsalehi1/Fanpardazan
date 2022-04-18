import React from 'react';

function A(props) {

    const { type } = props;
    const [state,setState] = React.useState({count:0,sum:100});

    const handleClick = ()=>{
        setState({...state,count:state.count+1});
    }

    // if (type === 'diary')
    //     return (<div>
    //         Component A=DIARY
    //     </div>)
    // else
    //     return (<div>
    //         Component A=NOTHING
    //     </div>)

    return (<div style={{backgroundColor:'greenyellow',margin:8,padding:8}}>
        Function Component A,
        {/* {
            type==='diary' ? 'DIARY' : 'NOTHING'
        } */}
        <span>State:count={state.count},sum:{state.sum}</span>
        <button onClick={handleClick}>Add Count</button>
    </div>)

}

export default A;
