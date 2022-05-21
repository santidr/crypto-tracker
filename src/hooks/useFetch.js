import { useEffect, useState } from 'react';

const initState = { data: null, loading: true, error: null }

const useFetch = (url) => {
    
    const [state, setState] = useState(initState)

    useEffect(() => {
        fetchData()
    }, [ url ])

    const fetchData = async () => {
        try {
            const resp = await fetch(url)
            const data = await resp.json()

            setState({
                ...initState,
                loading: false,
                data
            })
        } catch (error) {
            setState({
                ...initState,
                error
            })
        }
    }

    return state
}
 
export default useFetch;