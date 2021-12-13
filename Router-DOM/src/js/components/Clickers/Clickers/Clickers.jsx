import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Clicker from '../Clicker/Clicker.jsx';

import './Clickers.scss';

const Clickers = () => {

    const navigate = useNavigate();
    const { number } = useParams();
    const [numberOfClickers, setNumberOfClickers] = useState(0);

    console.log(number)

    const handlerInputChange = (event) => {
        const tempNumber=Number(event.target.value);
        setNumberOfClickers(tempNumber);
        navigate(`/Clickers/${tempNumber}`)
    }

    return (
        <div className='clickers_wrapper'>

            <div className='input_section'>
                <p className='input_title'>Number of Clickers:</p>
                <input
                    type='number'
                    min={0}
                    className='input_number'
                    value={numberOfClickers}
                    onChange={handlerInputChange} />
            </div>

            <div className='clickers'>
                {
                    [...Array(numberOfClickers)].map((element, index) => {
                        return (
                            <Clicker key={index} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Clickers;
