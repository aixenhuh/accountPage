import React from 'react';
import {Link} from 'react-router-dom';
import Chart from './Chart';

const Main = () => {
    return (
        <div>
            <Chart/>
            <Link to="/input">입력</Link>
        </div>
    )
}

export default Main;
