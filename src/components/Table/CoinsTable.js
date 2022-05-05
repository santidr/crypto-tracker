import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { CoinList } from '../../api/api'
import { Crypto } from '../../context/CryptoContext'
import { numberWithCommas } from '../../helpers/numberWithCommas'
import useFetch from '../../hooks/useFetch'

import Searchtbox from './Searchbox'

import '../../styles/Table.css'

const CoinsTable = () => {
    const { currency } = useContext(Crypto)
    const { data } = useFetch(CoinList(currency.name))
    const [ coinList, setCoinList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setCoinList(data)
    }, [ data ])

    return (
        <div className='container'>
            <h1>Cyptocurrency Prices by Market Cap</h1>

            <Searchtbox 
                coinList={ coinList } 
                setCoinList={ setCoinList }
                data={ data }
            />

            <table className="table table-dark">
                <thead>
                    <tr>
                        { ['Coin', 'Price', '24h Change', 'Market Cap'].map((head, i) => (
                            <th scope="col" key={i}>{head}</th>
                        )) }
                    </tr>

                </thead>
                <tbody>
                    { coinList?.map(coin => {

                        let profit = coin.price_change_percentage_24h >= 0

                        return (
                            <tr key={coin.id} onClick={() => navigate(`/coins/${coin.id}`)}>
                                <td style={{ display: 'flex' }}>
                                    <img
                                        src={coin.image}
                                        alt={coin.symbol}
                                        style={{ height: 44, marginRight: 10 }}
                                    />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span>{coin.symbol.toUpperCase()}</span>
                                        <span style={{ fontWeight: 200, fontSize: 12 }}>{coin.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <span>{currency.symbol}{numberWithCommas(coin.current_price)}</span>
                                </td>
                                <td>
                                    <span style={ profit ? { color: '#3de03d' } : { color: '#ea3943' }}>
                                        { profit && '+'}{coin.price_change_percentage_24h.toFixed(2)}
                                    </span>
                                </td>
                                <td>
                                    <span>{currency.symbol}{numberWithCommas(coin.market_cap)}</span>
                                </td>
                            </tr>
                        )
                    } ) }
                </tbody>
            </table>
        </div>
    )
}

export default CoinsTable