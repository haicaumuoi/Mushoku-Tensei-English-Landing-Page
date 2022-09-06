import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { soundtrackData } from '../../public/content/soundtrackContent';

import { soundtrackData2 } from '../../public/content/soundtrackContent_2';

function soundtrack() {
  return (
    <div className="overflow-y-visible">
      <div className="flex flex-col items-center mt-28">
        <div>
          <Image
            src="/images/music.svg"
            alt="story"
            width={200}
            height={80}
          ></Image>
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-10">
        <div className="flex justify-between">
          <ul>
            <li>
              <Link href={'/music'}>
                <div className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all">
                  Singer of the Series
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/music/collection'}>
                <div className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all">
                  Music Collection
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/music/soundtrack'}>
                <div className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all  bg-text_bg">
                  Soundtrack
                </div>
              </Link>
            </li>
          </ul>

          <div>
            <div className="ml-8 w-10/12 flex flex-col justify-center items-center border border-black p-10 font-mt_smol ">
              <div className="font-mt_black text-2xl">
                Jobless Reincarnation
              </div>{' '}
              <div className="font-mt_smol text-2xl my-5">
                Original Soundtrack 1
              </div>
              <div className="mt-5 w-10/12 flex justify-around">
                <Image
                  src="/images/music/soundtrack-1.jpg"
                  alt="key visual"
                  width={335}
                  height={335}
                  className="mx-5"
                ></Image>
              </div>
              <div className=" w-10/12 text-xs mt-20">
                "Mushoku Tensei" Original Soundtrack 1 Track List
              </div>
              <div className="w-10/12 text-xs mt-2 ">Distribution Version</div>
              {soundtrackData.map((data) => {
                return <div className="w-10/12 text-xs mt-2 ">{data.name}</div>;
              })}
            </div>

            <div className="ml-8 w-10/12 flex flex-col justify-center items-center border border-black p-10 font-mt_smol mt-5">
              <div className="font-mt_black text-2xl">
                Jobless Reincarnation
              </div>{' '}
              <div className="font-mt_smol text-2xl my-5">
                Original Soundtrack 2
              </div>
              <div className="mt-5 w-10/12 flex justify-around">
                <Image
                  src="/images/music/soundtrack-2.jpg"
                  alt="key visual"
                  width={335}
                  height={335}
                  className="mx-5"
                ></Image>
              </div>
              <div className=" w-10/12 text-xs mt-20">
                "Mushoku Tensei" Original Soundtrack 1 Track List
              </div>
              <div className="w-10/12 text-xs mt-2 ">Distribution Version</div>
              {soundtrackData2.map((data) => {
                return <div className="w-10/12 text-xs mt-2 ">{data.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default soundtrack;
