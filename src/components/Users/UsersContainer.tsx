import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {follow, requestUsers, setCurrentPage, unFollow, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersSuperSelector
} from '../../redux/users-selectors'

type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

type UsersContainerPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users users={this.props.users}
                             pageSize={this.props.pageSize}
                             totalUsersCount={this.props.totalUsersCount}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             follow={this.props.follow}
                             unFollow={this.props.unFollow}
                             followingInProgress={this.props.followingInProgress}/>
            }
        </>
    }
};


const mapStateToProps = (state: StateType) => {
    return {
        users: getUsersSuperSelector(state),
        // users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

// const mapStateToProps = (state: StateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

// const mapDispatchToProps = (dispatch: (action: UsersActionsType) => void) => {
//
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId: number) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
//
// }

// export default connect(mapStateToProps,{follow,unFollow,setCurrentPage,getUsers})(withAuthRedirect(UsersContainer))

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export default compose<React.ComponentType>(
    connect(mapStateToProps,{follow,unFollow,setCurrentPage,requestUsers}),
    // withAuthRedirect
)(UsersContainer)