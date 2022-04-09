import React from 'react';

class Products extends React.Component{

    render(props){

        const {type,list} = this.props;

        console.log('props',type);

        return (<div>
            Products {type}
            {list && 
            list.map(item=><div>{item.id}-{item.title}</div>)
            }
        </div>)
    }
}

export default Products;
