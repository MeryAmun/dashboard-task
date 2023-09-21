export const EventItem = ({ info }) => {
  const { event } = info;
  console.log(event);
  const startTime = new Date(event.start);
  const endTime = new Date(event.end);
  // const start = `${startTime.getHours()}:${startTime.getMinutes()}`
  let startHours = startTime.getHours() < 10 ? "0" : "";
  let startMinutes = startTime.getMinutes() < 10 ? "0" : "";
  let endHours = endTime.getHours() < 10 ? "0" : "";
  let endMinutes = endTime.getMinutes() < 10 ? "0" : "";
  return (
    <div style={{ display: "block" }}>
       <h5 style={{ margin: "5px 0" }}>{event.title}</h5>
      <h5>{`${startHours}${startTime.getHours()}:${startMinutes}${startTime.getMinutes()} - ${endHours}${endTime.getHours()}:${endMinutes}${endTime.getMinutes()}`}</h5>
    </div>
  );
};
