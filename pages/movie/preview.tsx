import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { movieData } from '../../public/content/movie';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

function Preview() {
  const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

  const [video, setPlayVideo] = useState(movieData[0].youtubeLink);
  const [isOpen, setModal] = useState(false);

  const openModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const videoClick: string = event.currentTarget.id;
    setPlayVideo(movieData[parseInt(videoClick) - 1].youtubeLink);
    setModal(!isOpen);
    document.getElementById('modal')?.classList.remove('hidden');
  };

  const closeModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    document.getElementById('modal')?.classList.add('hidden');
    setModal(!isOpen);
  };
  return (
    <>
      {' '}
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
      <div className="overflow-y-visible">
        <div className="flex flex-col items-center mt-28">
          <div>
            <Image
              src="/images/movie.svg"
              alt="story"
              width={200}
              height={80}
            ></Image>
          </div>
        </div>

        <div className="w-9/12 mx-auto mt-10">
          <div className="flex">
            <ul>
              <li>
                <Link href={'/movie'}>
                  <div className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all ">
                    All Content
                  </div>
                </Link>
              </li>
              <li>
                <Link href={'/movie/OPED'}>
                  <div
                    className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all"
                    id="1"
                  >
                    OP/ED
                  </div>
                </Link>
              </li>
              <li>
                <Link href={'/movie/preview'}>
                  <div
                    className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all bg-text_bg inline-block"
                    id="1"
                  >
                    Preview
                  </div>
                </Link>
              </li>
            </ul>

            <div className="ml-20 border-l border-l-black w-9/12">
              <div className=" font-mt_black text-2xl ml-10 pl-10 bg-movieIcon bg-no-repeat bg-contain">
                Preview
              </div>
              <div className="mt-10 ml-8 font-mt_smol pb-10 border-b border-b-black  w-full">
                <ul className="w-full flex justify-start items-center flex-wrap">
                  {movieData.map((movie) => {
                    if (movie.category === 'preview')
                      return (
                        <li className="mx-4 pb-10 hover:opacity-40 transition-all cursor-pointer">
                          <div className="relative inline-block">
                            <Image
                              src={movie.thumbail}
                              alt="story"
                              width={174}
                              height={97}
                              className="brightness-50"
                              onClick={openModal}
                              id={movie.id}
                            ></Image>{' '}
                            <img
                              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"
                            ></img>
                          </div>
                          <div>
                            <div className="mt-1 bg-text_bg inline-block">
                              {movie.name}
                            </div>
                          </div>
                        </li>
                      );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preview;
