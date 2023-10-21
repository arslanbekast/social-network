import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type DialogType = {
    id: number
    name: string
}
const dialogs: DialogType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

export type MessageType = {
    id: number
    message: string
}
const messages: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}
]

export type PostType = {
    id: number
    message: string
    likesCount: number
}
const posts: PostType[] = [
    {id: 1, message: "Hi, how are you?", likesCount: 0},
    {id: 2, message: "It's my first post", likesCount: 25},
    {id: 2, message: "Blabla", likesCount: 13},
    {id: 2, message: "Dadad", likesCount: 22},
]

ReactDOM.render(
    <App dialogs={dialogs} messages={messages} posts={posts}/>,
  document.getElementById('root')
);