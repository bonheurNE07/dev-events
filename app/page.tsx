import EventCard from "@/components/EventCard";
import ExplorerBtn from "@/components/ExplorerBtn";
import { events } from "@/lib/constants";


export default function Page() {
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev <br />Event You Can&apos;t Miss</h1>
      <p className="text-center mt-5">Hackatons, Meetups and Conferences, All in one place</p>

      <ExplorerBtn />

      <div className="mt-20 space-y-7">
        {/* Event Cards will go here */}
        <h3>Feature Events</h3>

        <ul className="events">
          {events.map((event) => (
            <li key={event.title} className="event-card list-none">
              <EventCard {...event} /> 
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
