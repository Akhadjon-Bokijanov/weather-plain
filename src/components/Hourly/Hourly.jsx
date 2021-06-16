import React from 'react'
import { DayIndex } from '../../App'
import Card from '../Card/Card'

const Hourly = ({ params, hShown }) => {

    return (
        <div>
            <h4 style={{ textAlign: 'center' }}>{DayIndex.find(item => item.short === params.day)?.long ?? "N/A"}: hourly</h4>
            <div style={{ display: 'flex', justifyContent: 'center', width: '90%', margin: '30px auto', flexWrap: 'wrap' }}>
                {
                    //when data is not fetched or still fetching, it must not crash
                    hShown?.map((item, idx) => <Card {...item} key={idx} />) ?? 'Loading...'
                }
            </div>            
        </div>
    )
}

export default Hourly
