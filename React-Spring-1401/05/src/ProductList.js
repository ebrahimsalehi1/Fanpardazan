import React from 'react';
import './Products.css';

const ProductList = (props) => {

    const [state, setState] = React.useState({
        products: props.list,
        sum: 0
    })


    const handleClick = () => {
        const result = state.products.map(item => ({ id: item.id + 1, title: item.title }));
        setState(
            {
                products: result,
            });

        props.onAdd(result.reduce((acc, i) => i.id + acc, 0));
        //console.log(typeof props.onAdd);
    }


    const { type, list } = props;

    return (<div>
        Products {type}

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>

                {state.products &&
                    state.products.map(item => <tr key={item.id}><td>{item.id}</td><td>{item.title}</td></tr>)
                }

            </tbody>

            <tfoot>
                <tr>
                    <td>{state.products.reduce((acc, i) => i.id + acc, 0)}</td>
                    <td>{state.products.length}</td>

                </tr>
            </tfoot>

        </table>
        <button onClick={handleClick}>Add Count</button>
    </div>)

}

export default ProductList;
