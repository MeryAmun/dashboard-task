import React, { useState } from "react";

const EventForm = ({ setEvents, events, formData, closeModal }) => {
  const [form, setForm] = useState(formData);
  const handleFormFieldChange = (e) => {
    const value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };
  const { start,  startStr, } = form;
  console.log(form);
  console.log(start + startStr);
  console.log(startStr);
  const handleSubmit = (e) => {
    const { id, start, end, startStr, endStr, title } = form;
    e.preventDefault();
    const eventNamePrompt = form;
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          title,
          start: `${start} ${startStr}`,
          end: `${end} ${endStr}`,
          id,
        },
      ]);
      // console.log('events',events)
      // console.log('form',form)
      closeModal();
    }
    setForm({
      title: "",
      start: "",
      end: "",
      startStr: "",
      endStr: "",
    });
  };

  return (
    <div className="eventForm">
      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={form.title}
          onChange={handleFormFieldChange}
          required
          className="eventForm"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="start"
          placeholder="Start Date"
          value={form.start}
          onChange={handleFormFieldChange}
          required
          className="eventForm"
        />
        <input
          type="time"
          name="startStr"
          placeholder="Start Time"
          value={form.startStr}
          onChange={handleFormFieldChange}
          required
          className="eventForm"
        />
      </div>
      <div className="form-group">
        <input
          type="date"
          name="end"
          placeholder="End Date"
          value={form.end}
          onChange={handleFormFieldChange}
          required
          className="eventForm"
        />
        <input
          type="time"
          name="endStr"
          placeholder="End Time"
          value={form.endStr}
          onChange={handleFormFieldChange}
          required
          className="eventForm"
        />
      </div>
      <button className="saveButton" onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
};

export default EventForm;
