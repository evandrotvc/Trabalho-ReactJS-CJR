import React from 'react';
import { Form, Input, Submit } from '../components/Forms';
import { createLogin } from '../services/users';

const Login = () => {

    const send = async (data) => {
        await createLogin(data);
        window.history.back();
    };

    return (
        <div>
            <Form onSubmit={send}>
                <h2>Login</h2>
                <Input name="username" type="text" label="Usuário:" defaultValue="" />
                <Submit>Entrar/Cadastrar</Submit>
            </Form>

        </div>
    );


}

export default Login