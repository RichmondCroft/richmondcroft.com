import './style.css'

export default function Contact() {
    return (
        <div className='contact-page-content'>
            <form className='form-email-text-submit'>
                <input type='email' id='email-id-box' />
                <input type='text' id='subject-text-input-box' />
                <input type='text' id='enter-text-here-input-box' />
                <input type='submit' 
                id='confirm-submit-button' 
                value='Confirm'/>
            </form>
        </div>
    )
}