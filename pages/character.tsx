import React from 'react';
import Image from 'next/image';
import { characterData } from '../public/content/character_data';

export default function character() {
  return (
    <div className="flex flex-col items-center mt-20">
      <div>
        <Image
          src="/images/character.svg"
          alt="story"
          width={300}
          height={100}
        ></Image>
      </div>

      <div className="flex justify-between">
        <div className="mx-5 my-5 p-1 border-black border flex items-center justify-center hover:opacity-40 transition-opacity cursor-default">
          {' '}
          <div className="w-40 h-8 font-mt_smol border border-black uppercase flex items-center justify-center">
            Season 1
          </div>
        </div>

        <div className="mx-5 my-5 p-1 border-black border flex items-center justify-center opacity-40 cursor-default">
          {' '}
          <div className="w-40 h-8 font-mt_smol border border-black uppercase flex items-center justify-center">
            Coming Soon
          </div>
        </div>
      </div>
      <span className="w-2/3 h-3 bg-black absolute -skew-x-12 top-[26.6rem] -left-32"></span>
      <span className="w-1/3 h-3 bg-black absolute -skew-x-12 top-[26.6rem] -right-[17rem]"></span>
      <div className="w-8/12 h-screen mb-10 mx-auto flex mt-5 bg-roundBackground bg-no-repeat bg-bg_character bg-center">
        <div className="w-1/2 h-20 pl-5">
          <Image
            src={characterData[3].characterImg}
            alt="avatar"
            width={340}
            height={655}
            objectFit="contain"
            priority
            objectPosition="top"
          ></Image>
        </div>
        <div className="mt-32 w-1/2 h-5/6 flex flex-col items-center ">
          <div className="h-auto text-4xl font-mt_black mb-10 bg-white px-4">
            {characterData[3].nametag}
          </div>
          <div className="font-mt_smol">{characterData[3].desc}</div>

          <div className="mt-10">
            <Image
              src={characterData[3].facesImg}
              alt="avatar"
              width={405}
              height={191}
              priority
              objectPosition="top"
            ></Image>
          </div>
        </div>
      </div>

      <div className="ml-20 w-8/12 h-96 ">
        <ul className="flex items-center flex-wrap">
          {characterData.map((character) => {
            return (
              <li className="w-28 h-24 flex flex-col items-center mb-3 hover:opacity-40 transition-opacity cursor-pointer">
                <div className="relative w-28 h-24">
                  <Image
                    src={character.avatar}
                    width="100%"
                    height="100%"
                    alt="avatar"
                    layout="fill"
                    objectFit="contain"
                    priority
                    objectPosition="top"
                  ></Image>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
