import React, { Component } from 'react';
import { Form, Input, Submit } from '../components/Forms';
import { createLogin } from '../services/users';
import { Link, Redirect } from '@reach/router';

class Login extends Component {

    state = {
        username: ''
    };

    send = async (data) => {
        await createLogin(data)
            .then(resp => {
                console.log(resp);
                localStorage.setItem('user-token', data.username);
                this.setState({ username: data.username});
            })
            .catch(err => {
                console.log(err);
                localStorage.setItem('user-token', data.username);
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