import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Event() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "event"]{
          title,
          slug,
          location,
          eventDate,
          description,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          "category": categories[0]->{
            title,
            sort
          }
        }`
      )
      .then((data) => setEventData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-gray-300 p-12 flex-grow">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Events</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Check out the next amazing showcase of talent
        </h2>
        <section className="grid grid-cols-1 gap-8">
          {eventData &&
            eventData.map((event, index) => (
              <Link
                to={'/event/' + event.slug.current}
                key={event.slug.current}
              >
                <article className="relative rounded-lg shadow-xl">
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-red-700 transform hover:scale-105 hover:shadow-lg hover:border-white transition ease-linear duration-200"
                    key={index}
                  >
                    <img
                      src={event.mainImage.asset.url}
                      alt={event.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-center items-center pb-4 hover:bg-opacity-20 hover:bg-black transition ease-linear duration-200">
                      <h3 className="text-gray-800 text-2xl text-center font-bold px-3 py-4 bg-red-700 rounded-lg text-red-100 bg-opacity-75 hover:bg-opacity-100 transition ease-linear duration-200">
                        {event.title}
                        <div className="relative text-white font-normal text-xs space-x-4">
                          <span>
                            {new Date(event.eventDate).toLocaleDateString()}
                          </span>
                          <br />
                          <span>{event.location}</span>
                          {/* {console.log(event.description[0].children[0].text)} */}
                        </div>
                      </h3>
                    </span>
                  </span>
                </article>
              </Link>
            ))}
        </section>
      </section>
    </main>
  );
}
