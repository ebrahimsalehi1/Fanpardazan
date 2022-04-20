import React from 'react';
import TextField from '../Base/TextField';
import Grid from '../Base/Grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../../App';

const Login = () => {

    const [user, setUser] = React.useState('');
    const [pass, setPass] = React.useState('');

    const navigate = useNavigate();

    const {state,dispatch} = React.useContext(UserContext);



    // const handleUserChange = (event) => {
    //     //console.log(event.target);
    //     //console.log(event.target.value,event.target.name);
    //     setUser(event.target.value);
    // }

    // const handlePasswordChange = event => {
    //     console.log(event.target.value);
    //     setPass(event.target.value);
    // }

    const handleChange = event => {
        const { name, value } = event.target;
        console.log({ name, value });
        if (name === 'user')
            setUser(event.target.value);
        else if (name === 'pass')
            setPass(event.target.value);

    }

    const handleLoginClick = () => {
        // alert(user + '-' + pass);
        axios(`http://localhost:1904/users?username=${user}&password=${pass}`)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    if (response.data.length > 0) {
                        //alert('user and pass are valid');
                        console.log('response.data', response.data);
                        dispatch({type:'user_info',userInfo:response.data[0]})
                        navigate('/');
                    }
                    else
                        alert('user and pass are not valid');
                }


            })
            .catch(err => {
                console.error(err);
            })
    }

    return (<Grid row>
        Login

        <Grid md={12} sm={12}>
            <TextField label='User Name' placeholder='User Name' name="user" onChange={handleChange} />
        </Grid>


        <Grid md={12} sm={12}>
            <TextField type='password' label='Password' placeholder='Password' name="pass" onChange={handleChange} />
        </Grid>

        <div><button onClick={handleLoginClick}>Login</button></div>

    </Grid>)
}

export default Login;
