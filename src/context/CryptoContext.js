import React, { createContext, useState } from 'react'

export const Crypto = createContext()

const CryptoContext = ({ children }) => {

    const [ currency, setCurrency] = useState({ name: 'USD', symbol: '$'})

    return (
        <Crypto.Provider value={{
            currency, setCurrency
        }}>
            { children }
        </Crypto.Provider>
    )
}

export default CryptoContext