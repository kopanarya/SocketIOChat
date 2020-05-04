import React from 'react'
import './Input.css'
import sendIcon from '../../icons/sendIcon.png'

const Input = ({message,setMessage, sendMessage}) => {
    return (
        <form className='form'>
               <input
                className='input'
                type='text'
                placeholder='Type a message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter'? sendMessage(e) : null}
                />
                <button className='sendButton' onClick={(e) => sendMessage(e) }>
                     <img className='sendIcon-img' src={sendIcon}/> Send
                </button>
        </form>
    )
}
export default Input
