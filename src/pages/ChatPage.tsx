import {WithAuthRedirect} from '../hoc/WithAuthRedirect';
import React, {useEffect, useState} from "react"
import s from './Chat.module.css';
import {Button} from "antd";
export type ChatMessageType = {
    message: string,
    userId: number,
    photo: string,
    userName: string
}
const Message = ({message}) => {
    return (
        <div>
            <img className={s.img} src={message.photo}  alt="img"/> <b>{message.userName}</b>
            <br/>
            {message.message}
        </div>
    )
}

const Messages = (props) => {
    const messages: Array<ChatMessageType> = props.messages;
    return (
        <div>
            {messages.map((message) => (<Message key={message.id} message={message}/>))}
        </div>
    )
}
const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
let AddMessageForm = (props) => {
    const [message, setMessage] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        if (message)
            ws.send(message)
        setMessage('');
    }
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)} className="form-control" name="message"/>
                <button type={'primary'} onClick={onSubmit}>Send message</button>
            </form>
        </div>
    )
}

const Chat = (props) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            setMessages((prevMessages) => [...prevMessages, ...JSON.parse(e.data)]);
        })
    }, [messages])

    return (
        <div>
            <Messages messages={messages}/>
            <AddMessageForm />
        </div>
    )
}

const ChatPage = (props) => {
    return (
        <Chat/>
    )
}

export default WithAuthRedirect(ChatPage);