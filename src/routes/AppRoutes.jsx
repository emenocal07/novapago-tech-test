import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CryptoListPage from '../pages/CryptoListPage'


const AppRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<CryptoListPage/>} />
        </Routes >
    )
}

export default AppRoutes