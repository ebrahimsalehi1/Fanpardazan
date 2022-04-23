import React from 'react';
import { UserContext } from '../../App';
import axios from 'axios';

const Search = () => {

    const { state, dispatch } = React.useContext(UserContext);

    const [categories,setCategories] = React.useState([]);

    const handleChange = event => {
        console.log(event.target.value);
        dispatch({type:'search_category',searchCategory:event.target.value})
    }

    React.useEffect(()=>{
        axios('http://localhost:1904/categories')
        .then(response=>{
            if(response.status===200){
                setCategories(response.data);
            }
        })
        .catch(err=>{
            console.error(err);
        })
    },[])

    return (<div>
        Search

        <select value={state.searchCategory} onChange={handleChange}>
            {categories.map(item=><option key={item}>{item}</option>)}
            {/* <option>electronics</option>
            <option>jewelery</option>
            <option>men's clothing</option>
            <option>women's clothing</option> */}
        </select>
    </div>)
}

export default Search;
