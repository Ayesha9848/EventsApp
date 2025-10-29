import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Events from './pages/Events'
import { getCurrentUser } from './lib/auth'


function PrivateRoute({children}){
return getCurrentUser()?children:<Navigate to="/login" replace />
}


export default function App(){
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Navigate to="/events" replace/>} />
<Route path="/signup" element={<Signup/>} />
<Route path="/login" element={<Login/>} />
<Route path="/events" element={<PrivateRoute><Events/></PrivateRoute>} />
</Routes>
</BrowserRouter>
)
}
