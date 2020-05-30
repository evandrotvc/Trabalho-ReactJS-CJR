import React, { Component, useState } from 'react';
import { Form, Input, Submit } from '../components/Forms';
import { Redirect } from 'react-router-dom';
import { createLogin } from '../services/users';
import { Link } from '@reach/router';

class Login extends Component {

    state = {
        username: ''
    };

    send = async (data) => {
        await createLogin(data)
            .then(resp => {
                console.log(resp);
                sessionStorage.setItem('user-token', data.username);
                this.setState({ username: data.username});
            })
            .catch(err => {
                console.log(err);
                sessionStorage.setItem('user-token', data.username);
                this.setState({ username: data.username});
            });
    };

    render() {
        if (sessionStorage.getItem('user-token')) {
            return (
                <Redirect to='/user' />
            );
        } else {
            return (
                <div>
                    <Form onSubmit={this.send}>
                        <h2>Login</h2>
                        <Input name="name" type="text" label="Usuário:" defaultValue="" />
                        <Link to={`/users/${this.username}`}> <Submit>Entrar/Cadastrar</Submit> </Link>
                    </Form>
                </div >
            );
        }
    }


}

export default Login