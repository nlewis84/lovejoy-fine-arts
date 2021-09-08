import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleEvent() {
  const [singleEvent, setSingleEvent] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
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
      .then((data) => setSingleEvent(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleEvent)
    return (
      <main className="bg-gray-300 p-12 flex-grow">
        <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg" />
      </main>
    );

  console.log(singleEvent);
  return (
    <main className="bg-gray-300 md:p-4 flex-grow">
      <article className="container shadow-lg mx-auto bg-white md:rounded-lg">
        <header className="relative pb-4">
          <div className="absolute w-full flex justify-center p-4">
            <div className="p-4">
              <h1 className="cursive text-center text-3xl lg:text-6xl">
                {singleEvent.title}
              </h1>
            </div>
          </div>
          <img
            src={urlFor(singleEvent.mainImage).blur(100).url()}
            alt={singleEvent.title}
            className="w-full h-0 md:h-4 flex object-cover object-top md:rounded-t"
          />
        </header>
        <div className="p-4 pt-16 mt-4">
          <div className="block border-l-8 border-red-700 rounded m-auto min-w-sm max-w-2xl justify-center text-gray-800">
            <img
              src={urlFor(singleEvent.mainImage).url()}
              alt={singleEvent.title}
            />
          </div>
          {/* This is new stuff */}
          <div className="text-gray-500 pt-8 block text-center text-xs md:space-x-4">
            <span className="inline-block px-1 md:px-0">
              <strong className="font-bold">Date</strong>:{' '}
              {new Date(singleEvent.eventDate).toLocaleDateString()}
            </span>
            <span className="inline-block px-1 md:px-0">
              <strong className="font-bold">Location</strong>:{' '}
              {singleEvent.location}
            </span>
          </div>
          {/* This is old stuff */}
          <div className="px-4 lg:px-12 py-4 lg:pb-12 prose text-md lg:text-xl leading-relaxed lg:prose-xl max-w-full">
            {/* <span className="h-full flex justify-center items-end pr-4 pb-4">
              <h3 className="text-white text-lg font-bold px-6 py-3 bg-red-700 rounded-full">
                {singleEvent.category.title}
              </h3>
            </span> */}
            <BlockContent
              blocks={singleEvent.description}
              projectId="tqrida4n"
              dataset="production"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
