import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

import useFetch from '../../hooks/useFetch';
import { Crypto } from '../../context/CryptoContext';
import { trendinCoinsUrl } from '../../api/api';
import { numberWithCommas } from '../../helpers/numberWithCommas';

const Carousel = () => {
    const { currency } = useContext(Crypto)
    const { data } = useFetch(trendinCoinsUrl(currency.name))
    const [ trending, setTrending] = useState([])

    useEffect(() => {
        setTrending(data)
    }, [ data ])
    

    const items = trending?.map((coin) => {
        let profit = coin.price_change_percentage_24h_in_currency >= 0

        return (
            <Link
                className="banner-carousel-item"
                to={`/coins/${coin.id}`}
            >
                <img src={coin?.image} alt={coin.name} style={{ marginBottom: 10, height: 80 }}/>
                <span>{ coin.symbol }&nbsp;
                    <span style={ profit ? { color: '#3de03d' } : { color: '#ea3943' }}>
                        {  profit && "+"}{ coin.price_change_percentage_24h_in_currency.toFixed(2) }%
                    </span>
                </span>

                <span style={{ fontSize: 20, fontWeight: 700 }}>
                    { currency.symbol }{ numberWithCommas(coin.current_price) }
                </span>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 4
        },
        1024: {
            items: 5
        }
    }

    return (
        <div className="banner-carousel">
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
            />
        </div>
    )
}

export default Carousel