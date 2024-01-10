import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
export const ProfileStatusWithHooks: FC<ProfileStatusPropsType> = (props: ProfileStatusPropsType) => {

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
        <div>
            {
                !editMode
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onChange={onStatusChange}
                               onBlur={deActivateEditMode} value={status}/>
                    </div>
            }


        </div>
    );
}