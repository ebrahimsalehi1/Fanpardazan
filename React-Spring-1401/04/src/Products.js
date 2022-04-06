import React from 'react';
import './Products.css';

class Products extends React.Component {

    constructor(props){
        super();


        this.state={
            products:props.list,
            sum:0
        }
    }

    handleClick = ()=>{
        this.setState(
            {
                products:this.state.products.map(item=>({id:item.id+1,title:item.title}))
            });

        this.props.onAdd(this.state.products.reduce((acc,i)=>i.id+acc,0));    
        //console.log(typeof this.props.onAdd);
    }

    render() {

        const { type, list } = this.props;

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

                    {this.state.products &&
                        this.state.products.map(item => <tr key={item.id}><td>{item.id}</td><td>{item.title}</td></tr>)
                    }

                </tbody>

                <tfoot>
                    <tr>
                        <td>{this.state.products.reduce((acc,i)=>i.id+acc,0)}</td>
                        <td>{this.state.products.length}</td>

                    </tr>
                </tfoot>

            </table>
            <button onClick={this.handleClick}>Add Count</button>
        </div>)
    }
}

export default Products;
