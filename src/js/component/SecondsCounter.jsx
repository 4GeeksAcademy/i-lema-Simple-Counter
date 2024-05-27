import React, {useEffect, useState} from "react";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SecondsCounter = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        
        // Limpia el intervalo cuando el componente se desmonta
        return () => clearInterval(interval);
    }, []);

    const digits = ('000000' + seconds).slice(-6).split('');

    return (
        <div id="fondo" className="d-flex justify-content-center clock my-2 px-4">
            <div id="reloj" className="d-flex align-items-center p-3 mx-2 my-3 rounded">
            <FontAwesomeIcon icon={faClock} className="text-white display-1" />
            </div>
            <div id="segundos" className="d-flex my-3">
                <div className="d-flex justify-content-center align-items-center mx-2 p-3 rounded" id="numero">
                    <p className="display-1 text-white"><strong>{digits[0]}</strong></p>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2 p-3 rounded" id="numero">
                    <p className="display-1 text-white"><strong>{digits[1]}</strong></p>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2 p-3 rounded" id="numero">
                    <p className="display-1 text-white"><strong>{digits[2]}</strong></p>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2 p-3 rounded" id="numero">
                    <p className="display-1 text-white"><strong>{digits[3]}</strong></p>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2 p-3 rounded" id="numero">
                    <p className="display-1 text-white"><strong>{digits[4]}</strong></p>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-2 p-3 rounded" id="numero">
                    <p className="display-1 text-white"><strong>{digits[5]}</strong></p></div>            
            </div>

        </div>
    );
}

export default SecondsCounter
