import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AddClient } from './pages/Clients/Add'
import { Error404 } from './pages/Error'
import { Home } from './pages/Home'
import { Login } from './pages/Users/Login'
import { Signup } from './pages/Users/Signup'

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Signup />} />
					<Route path="*" element={<Error404 />} />
					<Route path="/home" element={<Home />} />
					<Route path="/create" element={<AddClient />} />
				</Routes>
			</BrowserRouter>
			{/* <Login /> */}
		</div>
	)
}

export default App
