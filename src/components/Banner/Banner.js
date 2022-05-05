import Carousel from './Carousel'

import '../../styles/Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container banner-content">
                <h2 className='banner-title'>Crypto Hunter</h2>
                <p style={{ fontWeight: 200 }}>Get all info regarding your favorite Crypto Currency.</p>

                <Carousel />
            </div>
        </div>
    )
}

export default Banner