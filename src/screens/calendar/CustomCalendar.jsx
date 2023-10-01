import FullCalendar from "@fullcalendar/react";
import timePlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import scrollPlugin from "@fullcalendar/scrollgrid";
import daygridPlugin from "@fullcalendar/daygrid";
import momentTimezonePlugin from "@fullcalendar/moment-timezone";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "react-modal";
import { useState } from "react";
import { EventItem } from "./EventItem";
import EventForm from "./EventForm";
import { v4 as uuid } from "uuid";

 const CustomCalendar = () => {
  const [events, setEvents] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSelect = (info) => {
    console.log("select", info);
    const { start, end } = info;
    var initialStart = new Date(start);
    initialStart.setDate(initialStart.getDate() + 1);
    var startDate = initialStart.toISOString().substring(0, 10);
    var initialEnd = new Date(end);
    initialEnd.setDate(initialEnd.getDate() + 1);
    var endDate = initialEnd.toISOString().substring(0, 10);
    openModal();
    let startHours = initialStart.getHours() < 10 ? "0" : "";
    let startMinutes = initialStart.getMinutes() < 10 ? "0" : "";
    let endHours = initialEnd.getHours() < 10 ? "0" : "";
    let endMinutes = initialEnd.getMinutes() < 10 ? "0" : "";
    openModal();
    setFormData({
      start: startDate,
      end: endDate,
      startStr: `${startHours}${initialStart.getHours()}:${startMinutes}${initialStart.getMinutes()}`,
      endStr: `${endHours}${initialEnd.getHours()}:${endMinutes}${initialEnd.getMinutes()}`,
      title: "",
      id: uuid(),
    });
    // console.log('start time',`${initialStart.getHours()}`)
    // console.log(initialStart.getHours())
  };
  const handleEventClick = (info) => {
    console.log("click", info);
    const { event } = info;
    var initialStart = new Date(event.start);
    initialStart.setDate(initialStart.getDate() + 1);
    var startDate = initialStart.toISOString().substring(0, 10);
    var initialEnd = new Date(event.end);
    initialEnd.setDate(initialEnd.getDate() + 1);
    var endDate = initialEnd.toISOString().substring(0, 10);

    let startHours = initialStart.getHours() < 10 ? "0" : "";
    let startMinutes = initialStart.getMinutes() < 10 ? "0" : "";
    let endHours = initialEnd.getHours() < 10 ? "0" : "";
    let endMinutes = initialEnd.getMinutes() < 10 ? "0" : "";
    openModal();
    setFormData({
      ...event,
      start: startDate,
      end: endDate,
      startStr: `${startHours}${initialStart.getHours()}:${startMinutes}${initialStart.getMinutes()}`,
      endStr: `${endHours}${initialEnd.getHours()}:${endMinutes}${initialEnd.getMinutes()}`,
      title: event.title,
      id: event.id,
    });
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="calendar w-100">
      <Modal
        isOpen={modalIsOpen}
        contentLabel="onRequestClose Example"
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}
      >
        <EventForm
          setEvents={setEvents}
          events={events}
          formData={formData}
          closeModal={closeModal}
        />
        <button className="closeButton" onClick={closeModal}>
          Close
        </button>
      </Modal>
      <FullCalendar
        editable
        selectable
        events={events}
        select={handleSelect}
        eventClick={handleEventClick}
        headerToolbar={{
          start: "today prev next",
          // end: "dayGridMonth, dayGridWeek,dayGridDay",
          end: "dayGridMonth, timeGridWeek,timeGridDay",
          startStr: "",
          endStr: "",
        }}
        eventContent={(info) => <EventItem info={info} />}
        plugins={[
          daygridPlugin,
          scrollPlugin,
          interactionPlugin,
          daygridPlugin,
          timePlugin,
          momentTimezonePlugin,
          listPlugin,
        ]}
        views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
      />
    </div>
  );
};
export default CustomCalendar