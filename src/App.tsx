import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Users/Login'

function App() {
	return (
		<div className="App-header">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
			{/* <Login /> */}
		</div>
	)
}

export default App
