import React, { Component } from 'react';
import { Form, Input, Submit } from '../components/Forms';
import { createLogin } from '../services/users';
import { Link, Redirect } from '@reach/router';

class Login extends Component {

    state = {
        username: '',
    };

    send = async (data) => {
        if (data.username) {
            await createLogin(data)
            .then(resp => {
                console.log(resp);
                let storage = { username : data.username }
                localStorage.setItem('user-token', JSON.stringify(storage));
                // localStorage.setItem('user-token', data.username);
                this.setState({ username: data.username});
            })
            .catch(err => {
                console.log(err);
                let storage = { username : data.username }
                localStorage.setItem('user-token', JSON.stringify(storage));
                // localStorage.setItem('user-token', data.username);
                this.setState({ username: data.username});
            });
        }
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
                        <Input name="username" type="text" label="Usuário:" defaultValue="" />
                        {/* <Link to={`/users/${this.username}`}> <Submit>Entrar/Cadastrar</Submit> </Link> */}
                        <Submit>Entrar/Cadastrar</Submit>
                    </Form>
                </div >
            );
        }
    }


}

export default Login