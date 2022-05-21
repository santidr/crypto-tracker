import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { SingleCoin } from '../api/api'
import CoinInfo from '../components/Coin/CoinInfo'
import { Crypto } from '../context/CryptoContext'
import { numberWithCommas } from '../helpers/numberWithCommas'
import useFetch from '../hooks/useFetch'

const CoinPage = () => {

    const { id } = useParams()
    const { currency } = useContext(Crypto)
    const [coin, setCoin] = useState({})

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(SingleCoin(id))
            const data = await resp.json()
    
            setCoin(data)
            setLoading(false)
        }

        fetchData()
        
    }, [ id ])

    return (
        <div className="container-fluid">

            { loading ? <h4>Loading...</h4>
            : (
                <div className="row mt-3">
                    <aside className="col-md-3 col-xs-12 text-center">
                        <img style={ { width: '50%' } } src={coin?.image?.large} alt={coin?.name} />
                        <h3 className="mt-3">{coin?.name}</h3>

                        <div className="coin-details p-3" style={{ 'textAlign': 'justify'}}>
                            <p>{coin?.description?.en.split(". ")[0]}.</p>
                            <h5>Rank: <span className="coin-numbers">{coin?.coingecko_rank}</span></h5>
                            <h5>Current Price: <span className="coin-numbers">{currency.symbol}{numberWithCommas(coin?.market_data?.current_price[currency.name.toLowerCase()])}</span></h5>
                            <h5>Market Cap: <span className="coin-numbers">{currency.symbol}{numberWithCommas(coin?.market_data?.market_cap[currency.name.toLowerCase()])}</span></h5>
                        </div>
                    </aside>

                    <div className="col-md-9 col-xs-12 coingraph">
                        <CoinInfo coin={coin} currency={currency} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default CoinPage