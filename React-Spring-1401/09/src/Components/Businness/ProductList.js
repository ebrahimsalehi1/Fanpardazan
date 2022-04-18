import React from 'react';
import './ProductList.css';
import axios from 'axios';
import Product from './Product';
import Grid from '../Base/Grid';

const ProductList = props => {

    const [data,setData] = React.useState([]);

    React.useEffect(()=>{

        axios.get('http://localhost:1904/products')
        .then(response=>{
                if(response.status===200){
                    setData(response.data);
                }      
        })
        .catch(err=>{
            console.error(err)
            alert('Error in call webservice')
        })
    },[])

    return (<Grid row>        
        {
            data.length>0 &&
            data.map(item=><Grid md={4} sm={6}><Product key={item.id} data={item} /></Grid>)
        }
    </Grid>)
}

export default ProductList;
