import {addPostAC, deletePostAC, profileReducer, ProfileType, setStatus} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 0},
        {id: 3, message: "It's my first post", likesCount: 25},
        {id: 4, message: "Blabla", likesCount: 13},
        {id: 5, message: "Dadad", likesCount: 22},
    ],
    profile: {} as ProfileType,
    status: ''
}

it('new post should be added', () => {

    const action  = addPostAC("it-kamasutra.com")
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(5)
})

it('message of new post should be correct', () => {

    const action  = addPostAC("it-kamasutra.com")
    let newState = profileReducer(state, action)

    expect(newState.posts[0].message).toBe("it-kamasutra.com")
})

it('after deleting length of messages should be decrement', () => {

    const action  = deletePostAC(1)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it("after deleting length shouldn't be decrement if id is incorrect", () => {

    const action  = deletePostAC(100)
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(4)
})


it('profile status should be set', () => {

    const action  = setStatus("My status")
    let newState = profileReducer(state, action)

    expect(newState.status).toBe("My status")
})


