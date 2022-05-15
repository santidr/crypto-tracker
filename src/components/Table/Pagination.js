
const Pagination = ({ totalCoins, coinsPerPage, setCurrentPage }) => {

    let pageNumbers = []

    for (let i = 1; i <= Math.round(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handlePagination = (number) => {
        setCurrentPage(number)
        window.scroll(0, 50)
    }

    return (
        <nav style={{ marginBottom: 40 }} aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link bg-dark" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                { pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a 
                            className="page-link bg-dark" href="#"
                            onClick={() => handlePagination(number)}
                        >
                            { number }
                        </a>
                    </li>
                )) }

                <li className="page-item">
                    <a className="page-link bg-dark" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination