import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function index() {
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

      <div className="w-[60%] mx-auto mt-10">
        <div className="flex justify-between">
          <ul>
            <li>
              <Link href={'/music'}>
                <div
                  className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all bg-text_bg"
                  id="1"
                >
                  {' '}
                  Singer of the Series
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/music/collection'}>
                <div
                  className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all"
                  id="1"
                >
                  {' '}
                  Music Collection
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/music/soundtrack'}>
                <div
                  className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all"
                  id="1"
                >
                  {' '}
                  Soundtrack
                </div>
              </Link>
            </li>
          </ul>

          <div className="flex justify-around ">
            <div className="border-l border-l-black pl-10">
              <Image
                src="/images/music/singer.jpg"
                alt="key visual"
                width={276}
                height={276}
              ></Image>
            </div>
            <div className=" ml-8 w-1/3 font-mt_smol pb-10 border-b border-b-black">
              <div className=" text-xs ">Song writer and Singer</div>
              <div className=" font-mt_black text-2xl mt-2 mb-5">
                YUIKO OHARA
              </div>
              <div className=" text-sm">
                "This is the first time for me to create both the opening and
                the ending, and since the work is "Jobless Reincarnation," I
                wrote the music as if I too had been reincarnated. I am looking
                forward to watching the animated version of "Jobless
                Reincarnation," and I hope that the music will be the one that
                comes to mind when I hear the name of the work."
              </div>
              <div className="mt-5 font-mt_black">
                [Distribution Information]
              </div>
              <div className="font-mt_black mt-5">Opening Theme</div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/A00093319" target={'_blank'}>
                  Songs of a Traveler - Homecoming
                </a>
              </div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/A00092698" target={'_blank'}>
                  Distant Lullaby Songs
                </a>
              </div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/A00091642" target={'_blank'}>
                  Songs of Prayer
                </a>
              </div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/A00091641" target={'_blank'}>
                  Songs of Succession
                </a>
              </div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/94159" target={'_blank'}>
                  Songs of Awakening
                </a>
              </div>{' '}
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/94153" target={'_blank'}>
                  Songs of the Traveler
                </a>
              </div>
              <div className="mt-5 font-mt_black">Ending Theme</div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/A00091370" target={'_blank'}>
                  Wind and the Way to Go
                </a>
              </div>
              <div className="my-2 text-blue-500 hover:opacity-40 transition-opacity">
                <a href="https://nex-tone.link/94156" target={'_blank'}>
                  ONLY
                </a>
              </div>
              <div className="mt-5 font-mt_black">《info》</div>
              <div className="mt-5 text-sm">
                Yuiko Ōhara, born February 5, 1992 is a Japanese singer and
                songwriter from Chiba Prefecture who is affiliated with Toho
                Animation Records. Starting her career as a live performer in
                2012, she would also participate in several auditions and
                competitions. She made her major debut in 2015 with the song
                "Magic Parade", which was used as the theme song to the short
                film Little Witch Academia: The Enchanted Parade. Apart from
                Little Witch Academia, her music has also been featured in anime
                series such as Land of the Lustrous, Teasing Master Takagi-san,
                Hanebado!, and Mushoku Tensei: Jobless Reincarnation.{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
