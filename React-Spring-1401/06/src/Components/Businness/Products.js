import React from 'react';
import './Products.css';
import axios from 'axios';

const Products = props => {

    const [data,setData] = React.useState([]);

    React.useEffect(()=>{
        console.log('service call');

        axios.get('http://localhost:1904/products')
        .then(response=>{
                console.log(response.status,response.data);      
                if(response.status===200){
                    setData(response.data);
                }      
        })
        .catch(err=>{
            console.error(err)
        })
    },[])

    return (<div>
        Products
        {
            data.length>0 &&
            data.map(item=><div>{item.title}</div>)
        }
    </div>)
}

export default Products;
