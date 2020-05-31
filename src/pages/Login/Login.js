import React, { Component } from 'react';
import { Form, Input, Submit } from '../../components/Forms';
import { createLogin } from '../../services/users';
import { navigate } from '@reach/router';

import style from './Login.module.css';

class Login extends Component {

    state = {
        username: '',
    };

    send = async (data) => {
        localStorage.removeItem('user-token');
        if (data.username) {
            await createLogin(data)
                .then(resp => {
                    this.setState({ username: data.username });
                    let storage = { username: data.username }
                    localStorage.setItem('user-token', JSON.stringify(storage));
                })
                .catch(err => {
                    console.log(err);
                    console.log(data.username);
                    this.setState({ username: data.username });
                    let storage = { username: data.username }
                    localStorage.setItem('user-token', JSON.stringify(storage));
                });
            navigate(`/users/${data.username}`)
        }
    };

    render() {
        return (
            <div className={style.background}>
                <Form onSubmit={this.send}>
                    <h1 className={style.login}>Login</h1>
                    <Input name="username" type="text" label="" defaultValue="" />
                    <Submit>Entrar</Submit>
                </Form>
            </div>
        );
    }
}

export default Login