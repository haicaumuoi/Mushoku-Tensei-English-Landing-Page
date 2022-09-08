import React, { ReactElement } from 'react';
import Image from 'next/image';
import { characterData } from '../public/content/character_data';
import Carousel from 'react-material-ui-carousel';

export default function character() {
  const navTest = [
    ...characterData.map((character) => {
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
    }),
  ];

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
      <div className="w-11/12 h-fit mb-10 mx-auto mt-5">
        <Carousel
          autoPlay={false}
          animation={'slide'}
          navButtonsAlwaysVisible
          fullHeightHover={false}
          navButtonsWrapperProps={{
            style: {
              top: 'calc(30% - 70px)',
              backgroundColor: '#fff',
            },
          }}
          NextIcon={
            <div className="border border-black">
              <div className="border border-black w-8 h-8 m-[.2rem] flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          }
          PrevIcon={
            <div className="border border-black">
              <div className="border border-black w-8 h-8 m-[.2rem] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          }
          swipe
          IndicatorIcon={navTest}
          indicatorContainerProps={{
            className: 'w-8/12 h-96  pt-10 border-t border-t-black ml-56 mt-20',
          }}
          fullHeightHover={false}
        >
          {characterData.map((character) => {
            if (!character.facesImg && !character.characterImg) {
              return (
                <div className="flex flex-wrap w-[72%] h-screen ml-40 mr-20 justify-center bg-roundBackground bg-no-repeat bg-bg_character bg-center">
                  <div className="mt-32 w-1/2 h-5/6 flex flex-col items-center ">
                    <div className="w-full h-auto text-4xl font-mt_black mb-10  bg-white px-4 text-center">
                      {character.nametag}
                    </div>
                    <div className="font-mt_smol text-center">
                      {character.desc}
                    </div>
                  </div>
                </div>
              );
            } else if (!character.facesImg) {
              return (
                <div className="flex flex-wrap w-[72%] h-screen ml-40 mr-20 justify-between bg-roundBackground bg-no-repeat bg-bg_character bg-center">
                  <div className="w-auto h-full pl-5">
                    <Image
                      src={character.characterImg}
                      alt="avatar"
                      width={340}
                      height={655}
                      objectFit="contain"
                      priority
                      objectPosition="top"
                    ></Image>
                  </div>
                  <div className="mt-32 w-1/2 h-5/6 flex flex-col items-center ">
                    <div className="w-full h-auto text-4xl font-mt_black mb-10  bg-white px-4 flex flex-col">
                      {character.nametag}
                    </div>
                    <div className="font-mt_smol">{character.desc}</div>
                  </div>
                </div>
              );
            }
            return (
              <div className="flex flex-wrap w-[72%] h-screen ml-40 mr-20 justify-between bg-roundBackground bg-no-repeat bg-bg_character bg-center">
                <div className="w-auto h-full pl-5">
                  <Image
                    src={character.characterImg}
                    alt="avatar"
                    width={340}
                    height={655}
                    objectFit="contain"
                    priority
                    objectPosition="top"
                  ></Image>
                </div>
                <div className="mt-32 w-1/2 h-5/6 flex flex-col items-center ">
                  <div className="w-full h-auto text-4xl font-mt_black mb-10  bg-white px-4 flex flex-col">
                    {character.nametag}
                  </div>
                  <div className="font-mt_smol">{character.desc}</div>

                  <div className="mt-10">
                    <Image
                      src={character.facesImg}
                      alt="avatar"
                      width={405}
                      height={191}
                      priority
                      objectPosition="top"
                    ></Image>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
