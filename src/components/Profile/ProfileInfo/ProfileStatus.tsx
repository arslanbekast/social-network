import React, {ChangeEvent, FC} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type StatePropsType = {
    editMode: boolean
    status: string
}
export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state: StatePropsType = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StatePropsType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div>
                            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        </div>
                        : <div>
                            <input autoFocus={true} onChange={this.onStatusChange}
                                   onBlur={this.deActivateEditMode} value={this.state.status}/>
                        </div>
                }


            </div>
        );
    }
}