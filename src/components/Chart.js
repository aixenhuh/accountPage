import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Chart as ChartJS, registerables } from 'chart.js';
import {Line } from 'react-chartjs-2';


ChartJS.register(...registerables);

const Chart = () => {
    const [data, setData] = useState('');
    const fetchDatas = async () => {
        try {
            const response = await axios.get("https://viqgmpq74a.execute-api.ap-northeast-2.amazonaws.com/production/api/getData");
            var receive = response.data.message;
            var labels = [];
            var values = [];

            for(var item of receive) {
                labels.push(item.reg_date);
                values.push(item.totalAsset);
            }

            setData({
                labels : labels,
                datasets : [{
                    data: values,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            })

        } catch (e) {
            console.log(e);
        }
    };

    // useEffect(() => {
    //     fetchDatas();
    // },[]);

    const onClick = () => {
        fetchDatas();
    }

    if(data != '') {
        return (
            <div>
                <div style={{width:"500px"}}>
                    <Line data = { data } width = {300} height = {200}></Line>
                </div>
                <button onClick={onClick}>버튼</button>
            </div>
        )
    } else {
        return (
            <div>
                <div style={{width:"300px"}}>
                    {data.length > 0 ? <Line data = { data } width = {200} height = {100}></Line> : <div>버튼을 눌러주세요</div>}
                </div>
                <button onClick={onClick}>버튼</button>
            </div>
        )
    }
    
}

export default Chart;
