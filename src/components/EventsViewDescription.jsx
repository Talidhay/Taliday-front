import React from "react";

const PLACEHOLDER =
  "Details for this event are coming soon. Stay tuned as we fill in the story behind this wonderful community gathering. Check back to learn more about what took place, who was involved, and the impact we made together.";

const EventsViewDescription = ({ event }) => {
  const description = event?.description || PLACEHOLDER;
  const paragraphs = description.split("\n\n");

  return (
    <section id="eventsviewdescription" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 pb-20">
        {event?.date && (
          <p className="text-sm text-gray-500 italic mb-4">{event.date}</p>
        )}
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          {paragraphs.map((para, i) => (
            <React.Fragment key={i}>
              {para}
              {i < paragraphs.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
};

export default EventsViewDescription;
