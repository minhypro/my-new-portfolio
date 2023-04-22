import 'index.css'

import {createRoot} from 'react-dom/client'

import App from '@/pages/App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
