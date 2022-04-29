import { useState } from 'react'
import './style.css'

export default function Contact() {
    const [myEmail, setMyEmail] = useState('')
    const handleChangeOnEmail = (e) => {
        setMyEmail(e.target.value)
    }

    const [mySubject, setMySubject] = useState('')
    const handleChangeOnSubject = (e) => {
        setMySubject(e.target.value)
    }

    const [myText, setMyText] = useState('')
    const handleChangeOnText = (e) => {
        setMyText(e.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className='contact-page-content'>
            <form className='form-email-text-submit'
                onSubmit={handleOnSubmit}>
                <input type='email'
                    placeholder='Email-Id'
                    value={myEmail}
                    onChange={handleChangeOnEmail}
                    id='email-id-box' />
                <input type='text'
                    value={mySubject}
                    placeholder='Subject'
                    id='subject-text-input-box'
                    onChange={handleChangeOnSubject} />
                <textarea
                    placeholder='Enter Text'
                    value={myText}
                    onChange={handleChangeOnText}
                    rows='10'
                    id='enter-text-here-input-box' />
                <input type='submit'
                    id='confirm-submit-button'
                    value='Confirm' />
            </form>
        </div>
    )
}