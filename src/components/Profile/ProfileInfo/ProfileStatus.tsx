import React, {FC} from 'react';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deActivateEditMode = () => {
        this.setState({editMode: false})
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
                            <input autoFocus={true} onBlur={this.deActivateEditMode} value={this.props.status}/>
                        </div>
                }


            </div>
        );
    }
}