import axios from 'axios';
import React, {useState} from 'react';

const Product = () => {
    const [Asset, setAsset] = useState('');
    const [RegDate, setRegDate] = useState('');
    const [Spend, setSpend] = useState('');
    const [Dividened, setDividened] = useState('');

    const onRegDateHandler = (event) => {
        setRegDate(event.currentTarget.value);
    }

    const onAssetHandler = (event) => {
        setAsset(event.currentTarget.value);
    }
    
    const onSpendHandler = (event) => {
        setSpend(event.currentTarget.value);
    }
    
    const onDividenedHandler = (event) => {
        setDividened(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            reg_date : RegDate,
            totalAccountSum : Asset,
            spendSum : Spend,
            dividendSum : Dividened
        }

        console.log(body);

        axios.post("https://viqgmpq74a.execute-api.ap-northeast-2.amazonaws.com/production/api/add", body)
        .then((res) => console.log(res));
    }
    
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                    <label>RegDate</label>
                    <input type="text" value={RegDate} onChange={onRegDateHandler}/>
                    <label>Asset</label>
                    <input type="text" value={Asset} onChange={onAssetHandler} />
                    <label>Spend</label>
                    <input type="text" value={Spend} onChange={onSpendHandler} />
                    <label>Dividened</label>
                    <input type="text" value={Dividened} onChange={onDividenedHandler} />
                    <button type="submit">submit</button>
                </form>
        </>
    )
}

export default Product;
