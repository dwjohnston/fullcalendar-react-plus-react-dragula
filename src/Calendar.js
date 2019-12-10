import React from 'react';

import Dragula from "react-dragula";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  ThirdPartyDraggable
} from "@fullcalendar/interaction"; // needed for dayClick
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { DrakeContext } from './App';
export function Calendar({ }) {
    
    
    const drake = React.useContext(DrakeContext); 
    const events = [{ id: 1, title: "Event Now", start: new Date() }];



    return (<>
        <h1> Calendar</h1> 
        {true &&  <FullCalendar
        defaultView="dayGridMonth"
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        //ref={this.calendarComponentRef}
        weekends={true}
        events={events}
        droppable={true}
        eventRender={info => {
          // console.log(info);
          // console.log(eventRefs, info.el, info.event.id);
          // if (!eventRefs[info.event.id]) {
          //   setEventRefs({
          //     ...eventRefs,
          //     [info.event.id]: info.el
          //   });
          // }

          drake.containers.push(info.el);

          // new ThirdPartyDraggable(info.el, {
          //   itemSelector: ".fc-event",
          //   mirrorSelector: ".gu-mirror.gu-transit", // the dragging element that dragula renders
          //   eventData: function(eventEl) {
          //     return {
          //       title: eventEl.innerText
          //     };
          //   }
          // });
        }}
      />}
    </>
        );

}

