import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Main from './Components/Test/Main';
import Navbar from './Components/Base/Navbar';

export const UserContext = React.createContext();
const initializer = {
  userInfo: undefined ,
  searchCategory:''
}

function reducer(state, action) {
  switch (action.type) {
    case 'user_info':
      return { ...state, userInfo: action.userInfo }
    case 'search_category':
      return { ...state, searchCategory: action.searchCategory }
    default:
  }
}

function App() {


  const [state, dispatch] = React.useReducer(reducer, initializer);
  return (
    <div className="App">

      <UserContext.Provider value={{state,dispatch}}>
        <Navbar />
      </UserContext.Provider>

      {/* <Main /> */}


    </div>
  );
}

export default App;
