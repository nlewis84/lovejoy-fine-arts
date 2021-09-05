import React from 'react';
import image from '../curtain.jpg';

export default function Home() {
  return (
    <main className="relative flex-grow">
      <img
        src={image}
        alt="Red theater stage curtain closed."
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name">
          Lovejoy Arts
        </h1>
      </section>
    </main>
  );
}
