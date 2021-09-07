import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

export default function About() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "about"][0]{
          name,
          description,
          image{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setAbout(data))
      .catch(console.error);
  }, []);

  if (!about)
    return (
      <main className="bg-black p-12 flex-grow">
        <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg" />
      </main>
    );

  return (
    <main className="relative flex-grow">
      <img
        src={about.image.asset.url}
        alt="Red theater stage curtain closed."
        className="absolute object-cover object-bottom w-full h-full"
      />
      <div className="p-4 md:p-10 lg:pb-52 container mx-auto relative">
        <section className="bg-white rounded-lg shadow-2xl lg:flex p-10 lg:p-20">
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-center text-black mb-4">
              About
            </h1>
            <div className="prose lg:prose-xl text-black">
              <BlockContent
                blocks={about.description}
                projectId="tqrida4n"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
