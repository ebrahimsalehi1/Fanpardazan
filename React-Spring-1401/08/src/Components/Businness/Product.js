import React from 'react';
import './Product.css';
import axios from 'axios';

const Product = props => {
    const { id, title, description, cartegory, price, image, rating } = props.data;

    const [imageData,setImageData] = React.useState();
    const imageData2 = React.useRef();

    const [rate,setRate] = React.useState(5);
    // const rate2 = React.useRef(5);

    React.useEffect(()=>{
        axios({url:image,method:'GET',responseType:'blob'})
        .then(response=>{
            // console.log(response);
            let reader = new FileReader();
            reader.readAsDataURL(response.data);
            reader.onload=()=>{
                const imageDataUrl = reader.result;
                // console.log('imageDataUrl',imageDataUrl);
                //setImageData(imageDataUrl);
                imageData2.current.src=imageDataUrl;
            }    
        })
        .catch(err=>{
            console.error(err);
        })
    },[]);

    const handleChange = (event)=>{
        //setRate(event.target.value);
        // console.log(rate2.current.value);
    }

    console.log('Product is rendering ',{rate,id});

    return (<div className="product">
        {/* <img className="image" src={imageData}/> */}
        <img className="image" ref={imageData2}/>
        {/* <img className="image" src={image}/> */}


        <h4>{title}</h4>
        <span>{price}</span>

        <div>
            {/* <a href={image} target="_blank">{image}</a> */}
            <span>{rating.rate}-{rating.count}</span>
            <div>
            {/* <input type='number' value={rate} onChange={handleChange} min={0} max={5} /> */}
            {/* <input type='number' ref={rate2} min={0} max={5} onChange={handleChange}/> */}
            </div>
        </div>
      
    </div>)
}

export default Product;
