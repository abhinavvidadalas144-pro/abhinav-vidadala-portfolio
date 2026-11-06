/**
 * main.tsx — Application Entry Point
 * Mounts the root React <App /> component into the DOM #root container
 * and imports global Tailwind CSS and studio section styles.
 */
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
