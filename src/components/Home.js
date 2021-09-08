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
      <section className="relative pt-40 lg:pt-64 px-8">
        <h1 className="text-6xl text-center text-white font-bold cursive leading-relaxed md:text-9xl md:leading-tight">
          Lovejoy Fine Arts
        </h1>
      </section>
    </main>
  );
}
