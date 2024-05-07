import React from 'react';
import {useState} from 'react';



function Form() {
const [name, setName] = useState([]);

const handlenameChange = (event: { target: { value: React.SetStateAction<never[]>; }; }) => {
    setName(event.target.value);
  };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white shadow-md rounded px-16 pt-8 pb-8 mb-4 w-3/4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ownerName">
                        Nome do Proprietário
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ownerName" type="text" placeholder="Seu Nome" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carName">
                        Seu carro
                    </label>
                    <input value={name}
            onChange={handlenameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="carName" type="text" placeholder="Seu Carro"  />
              
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Proxímo
                    </button>
                </div>
            </form>
            <div>
            {name.map((name, index) => (
        <p key={index}>{name}

            </div>
        </div>
    );
}

export default Form;
