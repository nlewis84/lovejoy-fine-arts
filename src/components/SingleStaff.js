import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SingleStaff() {
  const [singleStaff, setSingleStaff] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          name,
          slug,
          position,
          id,
          sort,
          "category": categories[0]->{
            title,
            sort
          },
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          bio
        }`
      )
      .then((data) => setSingleStaff(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singleStaff)
    return (
      <main className="bg-gray-300 p-12 flex-grow">
        <article className="container shadow-lg mx-auto bg-gray-100 rounded-lg" />
      </main>
    );

  return (
    <main className="bg-gray-300 md:p-4 flex-grow">
      <article className="container shadow-lg mx-auto bg-white md:rounded-lg">
        <header className="relative pb-4">
          <div className="absolute w-full flex justify-center p-4">
            <div className="p-4">
              <h1 className="cursive text-center text-3xl lg:text-6xl">
                {singleStaff.name}
              </h1>
            </div>
          </div>
          <img
            src={urlFor(singleStaff.image).blur(100).url()}
            alt={singleStaff.name}
            className="w-full h-0 md:h-4 flex object-cover object-top md:rounded-t"
          />
        </header>
        <div className="p-4 pt-16 mt-4">
          <div className="block flex justify-center h-96">
            <img
              src={urlFor(singleStaff.image).url()}
              alt={singleStaff.name}
              className="rounded-2xl h-full"
            />
          </div>
          <div className="px-4 lg:px-12 py-4 lg:pb-12 prose text-md lg:text-xl leading-relaxed lg:prose-xl max-w-full">
            <span className="h-full flex justify-center items-end pb-4">
              <h3 className="text-white text-xs font-bold px-4 py-2 bg-red-700 rounded-full">
                {singleStaff.category.title}
              </h3>
            </span>
            <BlockContent
              blocks={singleStaff.bio}
              projectId="tqrida4n"
              dataset="production"
            />
          </div>
        </div>
      </article>
    </main>
  );
}
