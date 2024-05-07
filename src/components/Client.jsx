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
            <h2 className="text-2xl font-bold mb-4">Cliente: {clientName}</h2>
            <div className="bg-gray-200 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Seção Pagamentos</h3>
                <p>Horas estacionadas: {hoursParked}</p>
            </div>
        </div>
    );
};

export default ClientSection;
