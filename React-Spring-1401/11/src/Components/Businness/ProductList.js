import React from 'react';
import './ProductList.css';
import axios from 'axios';
import Product from './Product';
import Grid from '../Base/Grid';
import {UserContext} from '../../App';

const ProductList = props => {

    const [data,setData] = React.useState([]);

    const {state,dispatch} = React.useContext(UserContext);

    React.useEffect(()=>{

        const url = `http://localhost:1904/products${state.searchCategory ? "?category="+state.searchCategory : ''}`;
        axios.get(url)
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
            data.map(item=><Grid key={item.id} md={4} sm={6}><Product data={item} /></Grid>)
        }
    </Grid>)
}

export default ProductList;
