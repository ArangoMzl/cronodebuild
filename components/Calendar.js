'use client'
import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import Alert from './Alert';

import '@/app/globals.css';

const localizer = momentLocalizer(moment);

const colors = {
  blue: '#3490dc',
  red: '#e3342f',
  green: '#38c172',
  gray: '#6b7280',
};

const App = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [events, setEvents] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors.blue);


  const handleColorChangeInApp = (color) => {
    setSelectedColor(color);
    setShowAlert(true); // Cierra el menú después de seleccionar el color si es necesario
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setShowAlert(true);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setShowAlert(true);
  };

  const eventRenderer = ({ event }) => (
    <div className='custom-event-card'>
      <div>{moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}</div>
      <div>{event.title}</div>
      <div>{event.professorName}</div>
    </div>
  );

  const formats = {
    dayFormat: (date, culture, localizer) =>
      localizer.format(date, 'dddd', culture), // Formato del día en la vista semanal
    dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
      `${localizer.format(start, 'MMMM DD', culture)} - ${localizer.format(end, 'MMMM DD', culture)}`, // Formato del rango de fechas en la vista semanal
    timeGutterFormat: 'h A', // Formato de las horas con AM/PM
  };

  const handleSaveEvent = (eventTitle, professorName) => {
    setShowAlert(false);

    const newEvent = {
      start: selectedSlot.start,
      end: selectedSlot.end,
      title: eventTitle,
      color: selectedColor,
      professorName: professorName,
      startTime: moment(selectedSlot.start).format('h:mm A'),
      endTime: moment(selectedSlot.end).format('h:mm A'),
    };

    setEvents([...events, newEvent]);
  };

  // Define la lista de días hábiles (de lunes a sábado)
  const diasLaborables = [1, 2, 3, 4, 5, 6]; // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado

  // Función para ocultar el día domingo
  const ocultarDomingo = (date) => {
    return date.getDay() !== 0;
  };
  return (
    <div className="Calendario z-0">
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        views={['week']}
        selectable
        onSelectSlot={handleSelectSlot}
        min={moment().set({ hour: 6, minute: 0, second: 0 })}
        max={moment().set({ hour: 23, minute: 0, second: 0 })}
        timeslots={2}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color,
          },
        })}

        components={{
          event: eventRenderer, // Usar el renderer personalizado para la ventana emergente del evento

        }}
        dayPropGetter={date => ({
          className: diasLaborables.includes(date.getDay()) ? 'dia-laborable' : 'dia-no-laborable',
          hidden: ocultarDomingo(date),
        })}

        formats={formats} // Aplicar los formatos personalizados

      />
      {showAlert && (
        <Alert
          colors={colors}
          onColorChange={handleColorChange}
          selectedColor={selectedColor} // Pasa el color seleccionado
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          onSave={handleSaveEvent}
          handleColorChangeInApp={handleColorChangeInApp} // Pasa la nueva función
          className="custom-alert"
        />
      )}
    </div>
  );
};

export default App;
