import React, { useCallback, useEffect, useState } from 'react'



function DigitalWatch() {
    
    const [time, settime] = useState(new Date())

    // useEffect(function,[dependency])
    useEffect(() => {
        const intervalId = setInterval(() => {
            settime(new Date());
        }, 1000);
        return () => {
            // to stop and freeup resourece when we not use clock or component
            clearInterval(intervalId);
        }
    }, [])

    //  to formate the time
    function formateTime() {
        // to get current hours,minutes and seconds
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meredin = hours >= 12 ? "AM" : "PM";
        hours = hours % 12 || 12;

        // formate the time in 00:00:00 
        return `${hours < 10 ? "0" + hours : "" + hours}:${minutes}:${seconds < 10 ? "0" + seconds : "" + seconds

            }:${meredin}`
    }

    return (
        <div className='DigitallWatch'>
            <div className='clock'>
                <span> {formateTime()}</span>
            </div>
        </div>
    )
}

export default DigitalWatch