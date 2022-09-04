import React from 'react';
import Image from 'next/image';
import { storyData } from '../../public/content/story_data';
import Link from 'next/link';

function index(): JSX.Element {
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

      <div className=" w-4/5 h-auto my-14">
        <ul className="flex items-center justify-between flex-wrap">
          {storyData.map((panel) => {
            return (
              <Link href={`/story/${panel.id}`}>
                <li className="w-80 h-64 flex flex-col items-center mb-5 hover:opacity-40 transition-opacity cursor-pointer">
                  <div className="relative w-80 h-48">
                    <Image
                      src={panel.img1}
                      alt="episode image"
                      layout="fill"
                      objectFit="contain"
                      priority
                      objectPosition="top"
                    ></Image>
                  </div>

                  <div className="font-mt_black bg-text_bg">{`#${panel.id}`}</div>
                  <div className="font-mt_smol ">{panel.name}</div>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default index;
