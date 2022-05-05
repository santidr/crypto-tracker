import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Crypto } from '../context/CryptoContext'

const Header = () => {

	const { setCurrency } = useContext(Crypto)

	const navigate = useNavigate()

	const handleChangeCurrency = (e) => {
		if (e.target.value === 'EUR') {
			setCurrency({ name: e.target.value, symbol: '€'})
		} else {
			setCurrency({ name: e.target.value, symbol: '$'})
		}
	}

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<div className="row" style={{ width: '100%' }}>
						<div className="col-sm-2 d-flex align-items-center">
							<a 
								className="navbar-brand title"
								onClick={ () => navigate('/') }
							>
								Crypto Hunter
							</a>
						</div>
	
						<div className="col-sm-10">
							<div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
								<select 
									className="form-select bg-dark text-white selector"
									aria-label="Default select example"
									onChange={ handleChangeCurrency }
								>
									<option value={"USD"}>USD</option>
									<option value={"EUR"}>EUR</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default Header