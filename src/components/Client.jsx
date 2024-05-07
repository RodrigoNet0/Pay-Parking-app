import React, { useState, useEffect } from 'react';

const ClientSection = ({ clientName }) => {
    const [hoursParked, setHoursParked] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHoursParked(hoursParked => hoursParked + 1);
        }, 3600000); 

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="p-5">
            <header>
                <h1 className='flex flex-start font-bold text-xl mb-4 bg-gray-200 p-4 rounded-lg shadow-sm'>Dashboard</h1>
            </header>
            <div className='flex flex-col '>
            <h3 className='flex flex-start text-1xl font-semibold mt-3 '>Propriétario:</h3>
            <h3 className='flex flex-start text-1xl font-semibold '>Carro:</h3>
            </div>
            {/* <h2 className="text-2xl font-bold mb-4">Cliente: {clientName}</h2>
            <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Seção Pagamentos</h3>
                <p>Horas estacionadas: {hoursParked}</p>
            </div> */}
        </div>
    );
};

export default ClientSection;
