import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { HistoricalChart } from '../../api/api'
import { Chart as ChartJS, registerables } from 'chart.js';
import { chartDays } from '../../api/data';
import SelectButton from './SelectButton';

ChartJS.register(...registerables);

const CoinInfo = ({ coin, currency }) => {
    const [ historicData, setHistoricData ] = useState([])
    const [ days, setDays ] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(HistoricalChart(coin.id, days, currency.name))
            const data = await resp.json()
    
            setHistoricData(data.prices)
        }

        fetchData()
    }, [ days, currency, coin ])

    const styles = {
        display: "flex",
        justifyContent: "space-around",
        marginTop: 20,
        width: "100%",
    }

    return (
        <div className="container">
            <Line
                data={{
                    labels: historicData?.map(coin => {
                        let date = new Date(coin[0])
                        let time = date.getHours() > 12
                            ? `${date.getHours() - 12}:${date.getMinutes()} P.M`
                            : `${date.getHours()}:${date.getMinutes()} A.M`

                        return days === 1 ? time : date.toLocaleDateString()
                    }),

                    datasets: [
                        {
                            data: historicData?.map(coin => coin[1]),
                            label: `Past (${ days } days ) in ${ currency.name }`,
                            borderColor: "gold",
                        }
                    ]
                }}

                options={{
                    elements: {
                        point: {
                            radius: 1,
                        },
                    },
                }}
            />

            <div style={ styles }>
                { chartDays.map(day => (
                    <SelectButton
                        key={ day.value }
                        selected={ day.value === days }
                        onClick={ () => setDays(day.value) }
                    >
                        { day.label }
                    </SelectButton>
                )) }
            </div>
        </div>
    )
}

export default CoinInfo