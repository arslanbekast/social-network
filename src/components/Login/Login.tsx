import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchPropsType
const Login: FC<LoginPropsType> = ({isAuth, login, captchaUrl}) => {
    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe, captcha} = formData
        login(email, password, rememberMe, captcha)
    }

    if (isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    );
};

type LoginFormProps = {
    captchaUrl: string | null
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: FC<InjectedFormProps<FormDataType> & LoginFormProps> = ({handleSubmit, error, captchaUrl}) => {

    return (
            <form onSubmit={handleSubmit}>
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
                { captchaUrl && <img src={captchaUrl} /> }
                { captchaUrl && <Field name="captcha" placeholder="Symbols from image" component={Input} validate={[required]}/> }
                {
                    error && <div className={style.formSummaryError}>
                        {error}
                    </div>
                }

                <div>
                    <button>Login</button>
                </div>
            </form>
    );
};

// @ts-ignore
const LoginReduxForm = reduxForm<FormDataType, LoginFormProps>({form: 'login'})(LoginForm)

const mapStateToProps = (state: StateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)