import type { NextPage } from 'next';
import Image from 'next/image';
import ClickPlayHome from '../components/utilities/click_play_animation';
import movieHomeImg from '../public/images/movie-img-home.png';

const Home: NextPage = () => {
  return (
    <div className="w-auto overflow-y-visible">
      <Image
        src="/images/front-page-img.png"
        alt="title"
        width={1300}
        height={867}
      />

      <div className="flex flex-col items-center mt-32 overflow-hidden">
        <Image
          src="/images/story.svg"
          alt="story"
          width={240}
          height={42}
        ></Image>

        <div className="w-3/5 font-mt_smol my-12 flex flex-col items-center pl-10">
          <p className="font-mt_smol_italic mb-3 bg-text_bg w-fit max-w-3xl ">
            [ Jobless Reincarnation: I Will Seriously Try If I Go To Another
            World! ]{' '}
          </p>
          <span className="leading-7 text-center">
            Despite being bullied, scorned, and oppressed all of his life,
            <span className="bg-text_bg"> a 34-year-old shut-in</span> still
            found the resolve to attempt something heroic—only for it to end in
            a tragic accident. But in a twist of fate,{' '}
            <span className="bg-text_bg">
              he awakens in another world as Rudeus Greyrat
            </span>{' '}
            , starting life again as a baby born to two loving parents.
            Preserving his memories and knowledge from his previous life, Rudeus
            quickly adapts to his new environment. With the mind of a grown
            adult, he starts to{' '}
            <span className="bg-text_bg">
              display magical talent that exceeds all expectations
            </span>
            , honing his skill with the help of{' '}
            <span className="bg-text_bg"> a mage named Roxy Migurdia</span>.
            Rudeus learns swordplay from his father, Paul,{' '}
            <span className="bg-text_bg">
              and meets Sylphiette, a girl his age who quickly becomes his
              closest friend.
            </span>{' '}
            As Rudeus' second chance at life begins, he tries to make the most
            of his new opportunity while{' '}
            <span className="bg-text_bg">conquering his traumatic past. </span>{' '}
            And perhaps, one day, he may find{' '}
            <span className="bg-text_bg">
              the one thing he could not find in his old world — love.
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-32">
        <Image
          src="/images/movie.svg"
          alt="story"
          width={220}
          height={42}
        ></Image>

        <div className="flex justify-center relative ">
          <div
            onClick={ClickPlayHome}
            id="vidwrap"
            className="w-full h-1/3 mt-10 flex justify-center cursor-pointer"
          >
            <div className="hover:opacity-40 transition-all">
              <Image
                src={movieHomeImg}
                alt="story"
                width={970}
                height={540}
                className="brightness-50 "
              ></Image>
              <img
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[100px] h-[100px]"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABWUlEQVRoge2ZPU4DMRBGZ4GQBjpamhwAiYaGG3AIbsCPBAfgCpS0lLRcAAlRkvTUtElFgxA8CjQSIZD1rtcezeJXb/G9lWV/HosUCoXCd4BzYN06RzR88QQcWGeJgnlugZF1plawyCtwCWxaZ2vELyLKM3AIVNYZg1giotwBO9Y5awkQAXgHroEt67x/EiiiTIETYNU69wINRZQxsG+dfY6WIgAfwA2wbe0gIlEiygtwAQy9iyi27aBDEcWmHSQQAYt2kEhEydcOEoso6dtBJhGAN+CKVO0go4jSqB0Er0mA9r8hiomIHFVV9bDso5VMYWLYFZF7atqBB5Eg1qwDBDAWkWPPS2smIqcislcn0YiMu1Uvtl/3B6L7iqKlcSO5QEIR9zXe/cXK/VW3F8OHR5yPg9wP6NKeyl0QIOF+iO3+WSH/qdwFPyTcP7314jH0DBhY5ygUCv+cTyS4gJtcT/1lAAAAAElFTkSuQmCC "
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
