import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function index() {
  return (
    <div>
      <div className="flex flex-col items-center mt-28">
        <div>
          <Image
            src="/images/special.svg"
            alt="story"
            width={200}
            height={80}
          ></Image>
        </div>
      </div>

      <div className="w-8/12 flex justify-between items-center h-52 mx-auto mt-16">
        <Link href={'special/visualGallery'}>
          <div className="cursor-pointer hover:opacity-40 transition-all">
            <Image
              src="/images/visualGallery/main.jpg"
              alt="gallery"
              width={270}
              height={150}
            ></Image>
            <div className="font-mt_smol ">VISUAL GALLERY</div>{' '}
          </div>
        </Link>

        <div>
          <Link href={'/special/twitter'}>
            <div className="cursor-pointer hover:opacity-40 transition-all">
              <Image
                src="/images/visualGallery/drawing_main.jpg"
                alt="gallery"
                width={270}
                height={150}
              ></Image>
              <div className="font-mt_smol">MAKING THE ANIME</div>
            </div>
          </Link>
        </div>
        <a href="https://www.reddit.com/r/sixfacedworld/" target={'_blank'}>
          <div className="cursor-pointer hover:opacity-40 transition-all">
            <Image
              src="/images/visualGallery/subreddit.jpg"
              alt="gallery"
              width={270}
              height={150}
            ></Image>
            <div className="font-mt_smol ">SUB REDDIT</div>
          </div>{' '}
        </a>
      </div>
    </div>
  );
}

export default index;
