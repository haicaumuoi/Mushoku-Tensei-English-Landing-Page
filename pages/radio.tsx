import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { radioData } from '../public/content/radioVideo';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';
import Modal from '../components/utilities/modal';

export default function radio() {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

  const [video, setPlayVideo] = useState(radioData[0].youtubeLink);
  const [isOpen, setModal] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const videoClick: string = event.currentTarget.id;
    setPlayVideo(radioData[parseInt(videoClick) - 1].youtubeLink);
    setModal(!isOpen);
    document.getElementById('modal')?.classList.remove('hidden');
  };

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.getElementById('modal')?.classList.add('hidden');
    setModal(!isOpen);
  };

  console.log(video);

  return (
    <>
      <div
        className="hidden fixed w-screen h-screen bg-black top-0 left-0 z-20"
        id="modal"
      >
        <div className="bg-modalBg bg-contain bg-no-repeat bg-center z-30 h-screen">
          <div className="absolute top-6 right-6 w-10 h-10">
            <div
              className="w-full h-full bg-closeModal rounded-full cursor-pointer hover:brightness-50 bg-center bg-no-repeat bg-contain shadow-none outline-none"
              onClick={closeModal}
            ></div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ReactPlayer
              width={854}
              height={480}
              controls={true}
              url={video}
              playing={isOpen}
            ></ReactPlayer>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <div>
          <Image
            src="/images/radio.svg"
            alt="story"
            width={200}
            height={80}
          ></Image>
        </div>

        <div className="my-10 w-1/2 text-center font-mt_smol">
          Popular Videos on Mushoku Tensei
        </div>

        <div className="w-3/4 h-auto ml-16">
          <ul className=" flex items-center flex-wrap">
            {radioData.map((video) => {
              return (
                <li className="w-1/3 h-52 mt-10 hover:opacity-40 transition-all cursor-pointer border-stone-900">
                  <div className="relative inline-block">
                    <Image
                      src={video.thumbail}
                      alt="story"
                      width={270}
                      height={150}
                      className="brightness-50"
                      onClick={openModal}
                      id={video.id}
                    ></Image>
                    <img
                      className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"
                    ></img>
                  </div>
                  <div className="font-mt_smol text-sm mt-1 w-4/5">
                    {video.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
