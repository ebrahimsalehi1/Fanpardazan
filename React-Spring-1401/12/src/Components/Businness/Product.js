import React from 'react';
import './Product.css';
import axios from 'axios';
import Tooltip from '../Base/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd as AddIcon } from '@fortawesome/free-solid-svg-icons';

const Product = props => {
    const { id, title, description, cartegory, price, image, rating } = props.data;

    const [imageData, setImageData] = React.useState();
    const imageData2 = React.useRef();

    const [rate, setRate] = React.useState(5);
    // const rate2 = React.useRef(5);

    React.useEffect(() => {
        axios({ url: image, method: 'GET', responseType: 'blob' })
            .then(response => {
                // console.log(response);
                let reader = new FileReader();
                reader.readAsDataURL(response.data);
                reader.onload = () => {
                    const imageDataUrl = reader.result;
                    // console.log('imageDataUrl',imageDataUrl);
                    //setImageData(imageDataUrl);
                    imageData2.current.src = imageDataUrl;
                }
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    const handleChange = (event) => {
        //setRate(event.target.value);
        // console.log(rate2.current.value);
    }

    console.log('Product is rendering ', { title, rate, id });

    return (<div className="product">
        {/* <img className="image" src={imageData}/> */}
        <img className="image" ref={imageData2} />
        {/* <img className="image" src={image}/> */}

        <div className='container'>


            {title.length > 25 ?
                <Tooltip title={title}>
                    <h4 className='product-title'>{title.substr(0, 25) + "..."}</h4>
                </Tooltip>
                :
                <h4 className='product-title'>{title}</h4>
            }

            <div className='product-detail'>
                <span>{price.toLocaleString('en-US', {
                    style: 'currency', currency: 'USD'
                })}</span>

                <span>{rating.rate}</span>

                <FontAwesomeIcon icon={AddIcon} onClick={_ => {

                    const makeDate = _ => {
                        const mdate = new Date();
                        return mdate.getFullYear() + '-' +
                            (mdate.getMonth()+1 > 9 ? mdate.getMonth()+1 : "0" + (mdate.getMonth()+1)) + '-' +
                            (mdate.getDate() > 9 ? mdate.getDate() : "0" + mdate.getDate()) + 'T' +
                            (mdate.getHours() > 9 ? mdate.getHours() : "0" + mdate.getHours()) + ':' +
                            (mdate.getMinutes() > 9 ? mdate.getMinutes() : "0" + mdate.getMinutes()) + ':' +
                            (mdate.getSeconds() > 9 ? mdate.getSeconds() : "0" + mdate.getSeconds()) + ':' +
                            (mdate.getMilliseconds() > 9 ? mdate.getMilliseconds() : "0" + mdate.getMilliseconds()) + 'Z'

                    }
                    const cartData = {
                        userId: localStorage.getItem('userId'),
                        date: makeDate(),
                        products: [
                            {
                                productId: id,
                                quantity: 1
                            }
                        ],
                        __v: 0
                    };
                    console.log('cartData POST',cartData);

                    axios({
                        url: 'http://localhost:1904/carts',
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        data: cartData
                    })
                    .then(response=>{
                        if(response.status===201){
                            alert('Added')
                        }
                    })
                    .catch(err=>{
                        console.error(err);
                    })
                }} />

            </div>



        </div>


    </div>)
}

export default Product;
