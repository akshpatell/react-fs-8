import React from 'react';
import { createRoot } from 'react-dom';
import App from './App';
import './style.css';
import Test from './Test';

const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App />);
