import React from 'react';
import Image from 'next/image';

function index() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div>
        <Image
          src="/images/story.svg"
          alt="story"
          width={250}
          height={50}
        ></Image>
      </div>

      <div className="flex justify-between">
        <div className="mx-5 my-10 p-1 border-black border flex items-center justify-center hover:opacity-40 transition-opacity cursor-default">
          {' '}
          <div className="w-40 h-8 font-mt_smol border border-black uppercase flex items-center justify-center">
            Season 1
          </div>
        </div>

        <div className="mx-5 my-10 p-1 border-black border flex items-center justify-center opacity-40 cursor-default">
          {' '}
          <div className="w-40 h-8 font-mt_smol border border-black uppercase flex items-center justify-center">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
