import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto flex justify-center">
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.facebook.com/lovejoy.arts"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.twitter.com/LovejoyArts"
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#ffffff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </footer>
  );
}
