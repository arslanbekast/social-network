import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}
const Login: FC<LoginPropsType> = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="email" placeholder="Email" component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field type="password" name="password" placeholder="Password" component={Input} validate={[required]}/>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Field type="checkbox" name="rememberMe" id="rememberMe" component={Input}/>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                {
                    props.error && <div className={style.formSummaryError}>
                        {props.error}
                    </div>
                }

                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state: StateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)