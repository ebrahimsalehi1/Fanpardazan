import React from 'react';
import './Product.css';
import axios from 'axios';
import Tooltip from '../Base/Tooltip';

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

    console.log('Product is rendering ', { title,rate, id });

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

            <div>
                <span>{price.toLocaleString('en-US', {
                    style: 'currency', currency: 'USD'
                })}</span>
            </div>

            <div>
                <span>{rating.rate}</span>
            </div>

        </div>


    </div>)
}

export default Product;
