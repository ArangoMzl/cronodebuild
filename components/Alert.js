import React, { useState } from 'react';

const Alert = ({ colors, onColorChange, showAlert, setShowAlert, onSave, selectedColor }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [professorName, setProfessorName] = useState('');


    const handleTitleChange = (e) => {
        setEventTitle(e.target.value);
    };

    const handleProfessorChange = (e) => {
        setProfessorName(e.target.value);
    };

    const handleSave = () => {
        onSave(eventTitle, professorName);
        setEventTitle('');
        setProfessorName('');
        setShowAlert(true);
    };

    const handleClose = () => {
        setShowAlert(false);
        setEventTitle('');
    };

    return (
        <div className={`bg-white h-full rounded-md shadow-2xl custom-alert ${!showAlert === "hidden"}`} style={{ right: 0 }}>
            <p className="mb-2">Selecciona un color:</p>
            <div className="flex gap-2">
                {Object.keys(colors).map((color) => (
                    <div
                        key={color}
                        className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === colors[color] ? 'border-2 border-black' : ''}`}
                        style={{ backgroundColor: colors[color] }}
                        onClick={(e) => onColorChange(colors[color], e)}
                    ></div>
                ))}
            </div>
            <div className="mt-4">
                <label htmlFor="eventTitle" className="block mb-2">
                    Título del evento:
                </label>
                <input
                    type="text"
                    id="eventTitle"
                    value={eventTitle}
                    onChange={handleTitleChange}
                    className="w-full p-2 border rounded-md"
                />


            </div>

            <div className="mt-4">
                <label htmlFor="professorName" className="block mb-2">
                    Nombre del profesor:
                </label>
                <input
                    type="text"
                    id="professorName"
                    value={professorName}
                    onChange={handleProfessorChange}
                    className="w-full p-2 border rounded-md"
                />
            </div>



            <div className='btn'>
                <button
                    onClick={handleSave}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 m-3 rounded-md"
                >
                    Guardar
                </button>

                <button
                    onClick={handleClose}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 m-3 rounded-md"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
};

export default Alert;
