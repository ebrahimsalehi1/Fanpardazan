import React from 'react';
import { UserContext } from '../../App';

const Search = () => {

    const { state, dispatch } = React.useContext(UserContext);

    const handleChange = event => {
        console.log(event.target.value);
        dispatch({type:'search_category',searchCategory:event.target.value})
    }

    return (<div>
        Search

        <select onChange={handleChange}>
            <option>electronics</option>
            <option>jewelery</option>
            <option>men's clothing</option>
            <option>women's clothing</option>
        </select>
    </div>)
}

export default Search;
