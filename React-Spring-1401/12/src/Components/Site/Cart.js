import React from 'react';
// import { UserContext } from '../../App';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove as DeleteIcon } from '@fortawesome/free-solid-svg-icons';

const CartDetails = props => {
    const products = props.data;
    const cart = props.cart;

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        const fetchProducts = _ => {
            return axios('http://localhost:1904/products')
                .then(response => {
                    if (response.status === 200) {
                        return response.data;
                    }
                })
                .catch(err => err.response);
        }

        fetchProducts()
            .then(productsData => {
                const arr = [];

                products.forEach(product => {
                    const findProduct = productsData.find(item => item.id === product.productId);
                    arr.push(findProduct);
                });

                console.log('product arr', arr);

                setData(arr);

            });



    }, [])


    // console.log('CartDetails',products);

    return (<div className='cart-detail'>
        {data.length > 0 &&
            data.map(item => <div className='cart-detail-product'>
                <h5>{item.title}</h5>
                <FontAwesomeIcon icon={DeleteIcon} className='product-delete'
                    onClick={_ => {

                        // const conf = confirm('delete?');
                        // if (!conf)
                        //     return;

                        const cartObj = {
                            ...cart,
                            products: cart.products.filter(itemProduct => itemProduct.productId !== item.id)
                        };

                        axios.put(`http://localhost:1904/carts/${cart.id}`,
                            cartObj,
                            { 'Content-Type': 'application/json' })
                            .then(response => {
                                if (response.status === 200) {
                                    const filteredProducts = data.filter(itemProduct => itemProduct.id !== item.id);
                                    setData(filteredProducts);
                                    alert('Deleted')
                                }
                            })
                            .catch(err => {
                                console.error(err);
                            })

                        console.log('current cart is ', { cart, cartObj });
                    }}
                />
            </div>)
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

    return (<div >
        Cart
        <div>{localStorage.getItem('userId') ? localStorage.getItem('userId') : 'Please Login into the System '}
            {!localStorage.getItem('userId') &&
                <Link to='/login'>Login</Link>
            }

            {carts.length > 0 && carts.map((item, index) => <div className='cart' key={index}><h4>{item.date}</h4>
                <CartDetails key={index} data={item.products} cart={item} />
                {/* <div>
                {item.products.map(item=><div>productId:{item.productId}-quantity:{item.quantity}</div>)}
            </div> */}
            </div>)}

        </div>
    </div>)
}

export default Cart;
