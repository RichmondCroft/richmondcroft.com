import { useState } from 'react'
import './style.css'

export default function Contact() {
    const [input, setInput] = useState({})
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInput(values=>({...values,[name]: value}))
    }
    const handleOnSubmit = (event)=>{
        event.preventDefault()
    }
    return (
        <div className='contact-page-content'>
            <form className='form-email-text-submit'
                onSubmit={handleOnSubmit}>
                <input type='email'
                    name='emailId'
                    value={input.emailId || ''}
                    onChange={handleChange}
                    id='email-id-box'
                />

                <input type='text'
                    name = 'subject'
                    value={input.subject || '' }
                    onChange={handleChange}
                    id='subject-text-input-box'
                />

                <input type='text'
                    name = 'enterText'
                    value={input.enterText || ''}
                    onChange={handleChange}
                    id='enter-text-here-input-box'
                />

                <input type='submit'
                    id='confirm-submit-button'
                    value='Confirm'
                />
            </form>
        </div>
    )
}