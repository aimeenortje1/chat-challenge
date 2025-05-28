import './chat.css';
import image1 from '../assets/images/image1.jpg'

const chats = [
    {
        'id': 1,
        'type': 'support',
        'name': 'Support',
        'message': 'Welcome to support',
        'date': '2024-01-01T12:00:00Z'
    },
    {
        'id': 2,
        'type': 'user',
        'name': 'Mark',
        'message': 'I have a problem!',
        'date': '2024-01-01T13:00:00Z'
    },
    {
        'id': 3,
        'type': 'support',
        'name': 'Support',
        'message': 'Here to help. Please describe to me what kind of problem are you having. We are here to help. Please describe the issue in detail so we can best assist you',
        'date': '2024-01-01T13:05:00Z'
    },
    {
        'id': 4,
        'type': 'user',
        'name': 'Mark',
        'message': 'I tried to click the button but the button is not working. I have refreshed the page but issues still persist',
        'date': '2024-01-01T14:05:00Z'
    },
    {
        'id': 5,
        'type': 'support',
        'name': 'Support',
        'message': 'Welcome to support',
        'date': '2024-01-01T12:00:00Z'
    },
    {
        'id': 6,
        'type': 'user',
        'name': 'Mark',
        'message': 'I have a problem!',
        'date': '2024-01-01T13:00:00Z'
    },
    {
        'id': 7,
        'type': 'support',
        'name': 'Support',
        'message': 'Here to help. Please describe to me what kind of problem are you having. We are here to help. Please describe the issue in detail so we can best assist you',
        'date': '2024-01-01T13:05:00Z'
    },
    {
        'id': 8,
        'type': 'user',
        'name': 'Mark',
        'message': 'I tried to click the button but the button is not working. I have refreshed the page but issues still persist',
        'date': '2024-01-01T14:05:00Z'
    },
    {
        'id': 9,
        'type': 'support',
        'name': 'Mark',
        'message': 'I tried to click the button but the button is not working. I have refreshed the page but issues still persist',
        'date': '2024-01-01T14:05:00Z'
    }
];

export const Chat = () => {

    const renderChats = chats.map(chat => {
        return (
            <div className='chat-element' role='group'>
                <time className='chat-time' dateTime={chat.date}>{new Date(chat.date).toLocaleString()}</time>
                <div className={`chat-bubble ${chat.type}`}>
                    <img src={image1} alt='profile-picture' aria-hidden/>
                    <div>{chat.message}</div>
                </div>
                <div className='chat-from'>{chat.name}</div>
            </div>
        )
    })

    return (
        <div id='chat-main-container' className='chat-main-container'>
            <div id='chat' className='chat'>
                <header className='header'>
                    CHAT
                </header>
                <time className='chat-time' dateTime={new Date().toISOString()}>{new Date().toLocaleString()}</time>

                    <div className='chat-container' role='log' aria-live='polite'>
                        {renderChats}
                    </div>

                <footer className='chat-input-container'>
                    <form className='message-form' action="" aria-label='Send message form'>
                        <div className='message-form-container'>
                            <textarea
                                id='message-input'
                                placeholder='Type your message...'
                                aria-label='Type your message'
                            />
                            <button type='submit' aria-label='send message'><i className='fa-solid fa-paper-plane'></i>
                            </button>
                        </div>
                        <div className='icon-container' role='toolbar' aria-label='Message options'>
                            <button
                                type='button'
                                aria-label='Add attachment'
                                title='Add attachment'
                            >
                                <i className='fa-solid fa-plus' aria-hidden='true'></i>
                            </button>
                            <button
                                type='button'
                                aria-label='Add emoji'
                                title='Add emoji'
                            >
                                <i className='fa-solid fa-face-smile' aria-hidden='true'></i>
                            </button>
                        </div>
                    </form>
                </footer>
            </div>
        </div>
    )
}