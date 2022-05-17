import React, { useState } from 'react'

const Searchtbox = ({ coinList, setCoinList, data, setCurrentPage }) => {

    const [searchInput, setSearchInput] = useState('')

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSearch = (e) => {
        const key = e.key

        setCurrentPage(1)

        if (key === 'Backspace') {
            setCoinList(data)
        } else {
            setCoinList(
                coinList.filter(coin => (
                    coin.name.toLowerCase().includes(searchInput) ||
                    coin.symbol.toLowerCase().includes(searchInput)
                ))
            )
        }
    }

    return (
        <div className="search-box">
            <input
                className="form-control text-white bg-dark"
                type="text"
                placeholder="Search for a cryptocurrency..."
                name="searchbox"
                onChange={handleInputChange}
                value={searchInput}
                onKeyDown={handleSearch}
            />
        </div>
    )
}

export default Searchtbox