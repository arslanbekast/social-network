import styles from './FormsControls.module.css'

export const FormControl = ({input, meta: {touched, error}, children, ...props}: any) => {
    const hasError = touched && error

    return (
        <div className={styles.formControl+" "+(hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
export const Textarea = (props: any) => {

    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    )
}

export const Input = (props: any) => {

    const {input, meta, ...restProps} = props

    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}