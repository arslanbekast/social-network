import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.userStatus}>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode} title="Double click to edit">{props.status}</span>
                    </div>
                    : <div>
                        <input className={s.userStatusInput} autoFocus={true} onChange={onStatusChange}
                               onBlur={deActivateEditMode} value={status}/>
                    </div>
            }


        </div>
    );
}