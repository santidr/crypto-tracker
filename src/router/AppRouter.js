import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import CoinPage from '../pages/CoinPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/coins/:id" element={<CoinPage />} />
                <Route path="/" element={<HomePage />} />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}

export default AppRouter