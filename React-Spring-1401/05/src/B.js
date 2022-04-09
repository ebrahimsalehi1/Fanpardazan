import React from 'react';

class B extends React.Component {

    
    state={count:0};


    handleClick = ()=>{
        this.setState({count:this.state.count+1});
    }

    // if (type === 'diary')
    //     return (<div>
    //         Component A=DIARY
    //     </div>)
    // else
    //     return (<div>
    //         Component A=NOTHING
    //     </div>)

    render(){
        const { type } = this.props;
    return (<div style={{backgroundColor:'burlywood',margin:8,padding:8}}>
        Class Component B,
        {/* {
            type==='diary' ? 'DIARY' : 'NOTHING'
        } */}
        <span>State:{this.state.count}</span>
        <button onClick={this.handleClick}>Add Count</button>
    </div>)
    }

}

export default B;
