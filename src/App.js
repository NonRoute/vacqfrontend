import React from "react"
import "./App.css"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from "./components/Header"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</BrowserRouter>
			<ToastContainer />
		</>
	)
}

export default App
