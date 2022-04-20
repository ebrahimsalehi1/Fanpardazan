import React from 'react';
import {UserContext} from '../../App';

const Cart = ()=>{

    const {state,dispatch}= React.useContext(UserContext);

    return(<div>
        Cart
        <div>{state.userInfo.username}- {state.userInfo.email}-
        {state.userInfo.name.firstname} - {state.userInfo.name.lastname}

        </div>
    </div>)
}

export default Cart;
