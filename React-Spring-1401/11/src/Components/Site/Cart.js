import React from 'react';
// import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CartDetails = props => {
    const products = props.data;

    const [data,setData] = React.useState([]);

    React.useEffect(()=>{

        products.forEach((product,index) => {
            axios(`http://localhost:1904/products/${product.productId}`)
            .then(response=>{
                if(response.status===200){
                    products[index].product=response.data;
                }
            })
            .catch(err=>{
                console.error(err)
            })
        });

        setData(products);

        console.log('products data',data);

    },[])


    

    // console.log('CartDetails',products);

    return (<div>
        {data.length>0 && data.map(item=><div>{item.productId}</div>)
        }
    </div>)
}

const Cart = () => {

    //const { state, dispatch } = React.useContext(UserContext);
    const [carts, setCarts] = React.useState({});

    React.useEffect(() => {
        if (localStorage.getItem('userId')) {
            axios(`http://localhost:1904/carts?userId=${localStorage.getItem('userId')}`)
                .then(response => {
                    if (response.status === 200) {
                        setCarts(response.data);
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }, [])


    // console.log('Cart is rendering', carts);

    return (<div>
        Cart
        <div>{localStorage.getItem('userId') ? localStorage.getItem('userId') : 'Please Login into the System '}
            {!localStorage.getItem('userId') &&
                <Link to='/login'>Login</Link>
            }

            {carts.length > 0 && carts.map((item,index) => <div key={index}>{item.date}
                <CartDetails key={index} data={item.products} />
                {/* <div>
                {item.products.map(item=><div>productId:{item.productId}-quantity:{item.quantity}</div>)}
            </div> */}
            </div>)}

        </div>
    </div>)
}

export default Cart;
