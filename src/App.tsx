import React from 'react'
import logo from './assets/logo.svg'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex flex-col items-center justify-center min-h-screen">
        <img src={logo} className="h-24 animate-spin" alt="logo" />
        <p className="mt-4 text-xl">
          Edit <code className="font-mono bg-gray-200 px-1 rounded">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="mt-4 text-blue-600 hover:text-blue-800"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
