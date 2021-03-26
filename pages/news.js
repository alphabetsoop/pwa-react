import React from 'react'
import News from '../components/news'

const news = () => {
    return (
        <div>
            <div className="newsOverview">
                <h1>Recycling News</h1>
                <br />
                <p>Read about how recycling is influencing your community.</p>
            </div>
            <br />
            <News />
        </div>
    )
}

export default news