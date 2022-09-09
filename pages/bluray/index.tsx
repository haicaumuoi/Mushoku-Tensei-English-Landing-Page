import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blurayData } from '../../public/content/bluray';

function index() {
  return (
    <div>
      <div className="flex flex-col items-center mt-28">
        <div>
          <Image
            src="/images/bluray.svg"
            alt="story"
            width={200}
            height={80}
          ></Image>
        </div>
      </div>

      <div className="font-mt_black mt-20 text-2xl border-b-2 border-b-black leading-[0.01em] text-center mx-auto w-1/3">
        <span className="bg-white px-4  ">Season 1</span>
      </div>

      <div className="w-8/12 flex justify-between items-center mx-auto my-5 mt-16">
        {blurayData.map((data) => {
          return (
            <a href={data.link} target={'_blank'}>
              <div className="cursor-pointer hover:opacity-40 transition-all ">
                <Image
                  src={data.img}
                  alt="gallery"
                  width={193.5}
                  height={265.75}
                  placeholder="blur"
                ></Image>
                <div className="font-mt_smol mt-3 bg-text_bg w-[40%]">
                  Chapter {data.id}
                </div>{' '}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default index;
