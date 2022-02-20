import React from 'react'
import sun from '../../img/sun.png';
import moon from '../../img/moonset.png'
import './toggle.css';
import { useContext } from 'react';
import { ThemeContext } from '../../Context';
const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    }
    return (
        <div className='t'>
            <img src={sun} alt="not supported" srcset="" className='t-icon' id="sun" />
            <img src={moon} alt="not supported" srcset="" className='t-icon' id="moon" />
            <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 29 }}></div>
        </div>
    )
};
export default Toggle;