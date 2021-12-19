import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Clicker from '../Clicker/Clicker.jsx';

import './Clickers.scss';

const Clickers = () => {

    const navigate = useNavigate();
    const { number } = useParams();
    const [numberOfClickers, setNumberOfClickers] = useState(Number(number) || 0);

    useEffect(() => {
        setNumberOfClickers(Number(number) || 0);
    }, [number])

    const handlerInputChange = (event) => {
        navigate(`/Clickers/${Number(event.target.value)}`)
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
