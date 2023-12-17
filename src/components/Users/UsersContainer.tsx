import React, {FC} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingInProgress, toggleIsFetching,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersContainerPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFollowing: boolean, userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false)
            })
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
                             followingInProgress={this.props.followingInProgress}
                             toggleFollowingInProgress={this.props.toggleFollowingInProgress}/>
            }
        </>
    }
};


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

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


export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingInProgress
    })(UsersContainer)

// export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)