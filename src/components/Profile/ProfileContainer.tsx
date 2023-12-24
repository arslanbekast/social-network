import React, {Component} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";



type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType



class ProfileContainer extends Component<PropsType>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }

        this.props.getUserProfile(Number(userId))
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

};

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)