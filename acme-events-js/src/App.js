import React, { useState } from 'react';
import moment from 'moment';

const today = new Date();


function App() {

  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [events, setEvents] = useState([]);

  const onSubmit = (ev)=> {
    ev.preventDefault();
    const event = {
      date, title, content
    };
    setEvents([...events, event])
    setDate("");
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>The Acme Event Site</h2>
      <h3>Welcome! Today is { moment(today).format('MM/DD/YYYY')} </h3>

      <main>
      <form onSubmit={ onSubmit }>
        <input value={ date } onChange={ev=> setDate(ev.target.value)}/>
        <input value={ title } onChange={ev=> setTitle(ev.target.value)}/>
        <input value={ content } onChange={ev=> setContent(ev.target.value)}/>
        <button disabled={ !date || !title || !content }>Save</button>
      </form>
      </main>

      <div>
        <ul>
          <EventList events = {events}/>

            <li id="title">{title}</li>
            <li>{date}</li>
            <li>{content}</li>
        </ul>
      </div>
      </div>


  );
}



const EventList = (props) => {
  const { events } = props;
  console.log(props);
  return (
    <ul>
      {
        events.map( (event, idx) => {
         return (
           <li key={ idx}>
             {event.title} { event.date } {event.content}
           </li>
         )
        })
      }
    </ul>
  );
};


const CreateEvent = ({save}) =>{

}

export default App;
