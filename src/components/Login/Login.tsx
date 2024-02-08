import React, {FC} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/redux-store";
import style from '../common/FormsControls/FormsControls.module.css'
import s from './Login.module.css'

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
        <div className={s.loginWrapper}>
            <div className={s.login}>
                <h2 className={s.title}>Login into<br/>your account</h2>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
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

const LoginForm: FC<InjectedFormProps<FormDataType, LoginFormProps> & LoginFormProps> = ({handleSubmit, error, captchaUrl}) => {

    return (
            <form onSubmit={handleSubmit} className={s.loginForm}>
                <div className={s.inputWrapper}>
                    <div className={s.iconWrapper}>
                        <i className="fa-regular fa-envelope"></i>
                    </div>

                    <Field name="email" placeholder="Email" component={Input} validate={[required]}/>
                </div>
                <div className={s.inputWrapper}>
                    <div className={s.iconWrapper}>
                        <i className="fa-solid fa-lock"></i>
                    </div>

                    <Field type="password" name="password" placeholder="Password" component={Input}
                           validate={[required]}/>
                </div>
                <div className={s.rememberWrapper}>
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
                    <button className={s.loginBtn}>Login</button>
                </div>
            </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType, LoginFormProps>({form: 'login'})(LoginForm)

const mapStateToProps = (state: StateType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)