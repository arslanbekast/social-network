import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="login" placeholder="Login" component="input"/>
                </div>
                <div>
                    <Field name="password" placeholder="Password" component="input"/>
                </div>
                <div>
                    <Field type="checkbox" name="rememberMe" id="rememberMe" component="input"/>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)