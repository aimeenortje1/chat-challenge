import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import {Chat} from "./components/Chat.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Chat/>
    </StrictMode>,
)
