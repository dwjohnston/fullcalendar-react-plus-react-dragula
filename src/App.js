import * as React from "react";
import { render } from "react-dom";
import Dragula from "react-dragula";
import "./App.css";
import "react-dragula/dist/dragula.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {
  ThirdPartyDraggable
} from "@fullcalendar/interaction"; // needed for dayClick
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
export default function App() {
  const refA = React.useRef();
  const refB = React.useRef();

  const [eventRefs, setEventRefs] = React.useState({});
  const [drake, setDrake] = React.useState();

  React.useEffect(() => {
    if (refA.current && refB.current) {
      console.log("refs exist");
      console.log(refA, refB, eventRefs);
      let options = {
        copy: true
      };
      const drake = Dragula([refA.current, refB.current], options);
      setDrake(drake); 
      console.log(drake);
    }
  }, [refA, refB]);

  const events = [{ id: 1, title: "Event Now", start: new Date() }];

  return (
    <div>
      <div className="container" ref={refA}>
        <div>Swap me around</div>
        <div>Swap her around</div>
        <div>Swap him around</div>
        <div>Swap them around</div>
        <div>Swap us around</div>
        <div>Swap things around</div>
        <div>Swap everything around</div>
      </div>

      <div className="container" ref={refB}>
        <div>Foo</div>
        <div>Bar</div>
        <div>Biz</div>
      </div>

      {drake &&  <FullCalendar
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
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
