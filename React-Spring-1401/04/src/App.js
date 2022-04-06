import logo from './logo.svg';
import './App.css';
import React from 'react';
import Products from './Products';
import productData from './Data.json';

class App extends React.Component {

  state = {
    sum:0
  }

  handleAdd = (sumOfProducts)=>{
    // alert(sumOfProducts)
    this.setState({sum:sumOfProducts})
  }

  render(){
    return (
      <div className="App">
      <h1>Session 4</h1>
      
      <Products  
        type='diary' 
        list={productData.products.filter(item=>item.id<=10)}
        onAdd={this.handleAdd}/>


      <div style={{border:'2px solid green',padding:8,marginTop:10}}>
        App Sum=

        {/* {productData.products.filter(item=>item.id<=10).reduce((acc,i)=>i.id+acc,0)} */}
        {this.state.sum}
      </div>

      </div>
    );
  }
}

export default App;
