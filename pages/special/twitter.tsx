import React from 'react';
import Image from 'next/image';

function twitter() {
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

      <div className="w-8/12 flex justify-between items-center mx-auto flex-wrap mt-16">
        <a
          href={
            'https://twitter.com/mushokutensei_A/status/1348827038531137539?s=20'
          }
          className="w-1/3 h-48 border-b border-b-black pb-10"
        >
          <div className="relative inline-block hover:opacity-40 transition-all">
            <Image
              src={'/images/visualGallery/twitter-1.jpg'}
              alt="story"
              width={270}
              height={150}
              className="brightness-50"
            ></Image>
            <img
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"
            ></img>
            <div className="font-mt_black ">Episode 1</div>{' '}
          </div>
        </a>

        <a
          className="w-1/3 h-48 border-b border-b-black pb-10"
          href={
            'https://twitter.com/mushokutensei_A/status/1351363756325003268?s=20'
          }
        >
          <div className="relative inline-block hover:opacity-40 transition-all">
            <Image
              src={'/images/visualGallery/twitter-2.jpg'}
              alt="story"
              width={270}
              height={150}
              className="brightness-50"
            ></Image>
            <img
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"
            ></img>
            <div className="font-mt_black ">Episode 2</div>{' '}
          </div>
        </a>
        <a
          className="w-1/3 h-48 border-b border-b-black pb-10"
          href="https://twitter.com/mushokutensei_A/status/1353923213764349952?s=20"
          target={'_blank'}
        >
          <div className="relative inline-block hover:opacity-40 transition-all">
            <Image
              src={'/images/visualGallery/twitter-3.jpg'}
              alt="story"
              width={270}
              height={150}
              className="brightness-50"
            ></Image>
            <img
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"
            ></img>
            <div className="font-mt_black ">Episode 3</div>{' '}
          </div>
        </a>
        <a
          className="w-1/3 h-48 mt-10"
          href="https://twitter.com/mushokutensei_A/status/1356437185973477376?s=20"
          target={'_blank'}
        >
          <div className="relative inline-block hover:opacity-40 transition-all">
            <Image
              src={'/images/visualGallery/twitter-4.jpg'}
              alt="story"
              width={270}
              height={150}
              className="brightness-50"
            ></Image>
            <img
              className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC"
            ></img>
            <div className="font-mt_black ">Episode 4</div>{' '}
          </div>
        </a>
      </div>
    </div>
  );
}

export default twitter;
