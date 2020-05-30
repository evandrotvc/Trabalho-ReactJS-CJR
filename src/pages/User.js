import React, { Component } from 'react';
import { getUser } from '../services/users';
import Login from './Login';

class User extends Component{

    componentDidMount(){
        const logged = sessionStorage.getItem('user-token');
        if (logged === undefined){
           
        }else{
            this.setUser(logged);
        }
    }

    setUser = async(user) => {
         getUser(user)
         .then(resp =>{ console.log('user'); console.log(resp); })
    }

    render(){
        return(
            <h1>User</h1>
        )
    }
    
}

export default User;