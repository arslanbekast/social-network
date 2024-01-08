import React, {FC} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../components/common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessage: (newMessageText: string) => void
}

type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

export const Dialogs: FC<DialogsPropsType> = ({sendMessage, dialogsPage}) => {

    const addNewMessage = (values: FormDataType) => {
        sendMessage(values.newMessageText);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
                }
            </div>
            <div className={s.messages}>
                {
                    dialogsPage.messages.map(m => <Message key={m.id} message={m.message} />)
                }

                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

type FormDataType = {
    newMessageText: string
}

const maxLength150 = maxLengthCreator(50)
const AddMessageForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="newMessageText"
                       placeholder="Enter your message"
                       validate={[required, maxLength150]}/>
            </div>
            <div>
                <button>Send</button>
            </div>

        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)