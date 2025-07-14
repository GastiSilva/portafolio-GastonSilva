import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppRouter from './routes/router'
import './App.css'

function App() {
  return (
    <div className='min-h-screen bg-[#F0F1C5]'>
      <AppRouter />
    </div>
  );
}

export default App;

