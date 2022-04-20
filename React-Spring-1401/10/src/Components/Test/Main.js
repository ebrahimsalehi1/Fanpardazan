import React from 'react'
import ProductList from '../Businness/ProductListAdmin';
import productData from '../../SampleData/Data.json';
import A from './A';
import B from './B';

export default function Main() {

    const [state, setState] = React.useState({
        sum: 0
    })

    const handleAdd = (sumOfProducts) => {
        // alert(sumOfProducts)
        // this.setState({sum:sumOfProducts})
        setState({ sum: sumOfProducts })
    }

    console.log(
        {
            carts: productData.carts,
            users: productData.users,
            procucts: productData.products,
            categories: productData.categories
        });

    return (<div>
        <h1>Session 6</h1>

        <ProductList
            type='diary'
            list={productData.products.filter(item => item.id <= 10)}
            onAdd={handleAdd} />


        <div style={{ border: '2px solid green', padding: 8, marginTop: 10 }}>
            App Sum=

            {/* {productData.products.filter(item=>item.id<=10).reduce((acc,i)=>i.id+acc,0)} */}
            {state.sum === 0 ? productData.products.filter(item => item.id <= 10).reduce((acc, i) => i.id + acc, 0)
                :
                state.sum
            }
        </div>

        <A />
        <B />

    </div>)
}