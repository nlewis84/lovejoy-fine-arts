import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

export default function Staff() {
  const [staffData, setStaff] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "staff"]{
        name,
        slug,
        image{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setStaff(data))
      .catch(console.error);
  }, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">Staff Page</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to the staff page
        </h2>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8">
          {staffData &&
            staffData.map((staff, index) => (
              <article>
                <Link
                  to={'/staff/' + staff.slug.current}
                  key={staff.slug.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={staff.image.asset.url}
                      alt={staff.image.alt}
                      className="w-full h-full rounded-r object-cover object-top absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75">
                        {staff.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
