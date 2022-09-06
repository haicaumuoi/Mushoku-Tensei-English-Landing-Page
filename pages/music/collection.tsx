import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { collectionData } from '../../public/content/collection';

function collection() {
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
                <div
                  className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all"
                  id="1"
                >
                  Singer of the Series
                </div>
              </Link>
            </li>
            <li>
              <Link href={'/music/collection'}>
                <div
                  className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all bg-text_bg"
                  id="1"
                >
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
                  Soundtrack
                </div>
              </Link>
            </li>
          </ul>

          <div className="ml-8 w-10/12 flex flex-col justify-center items-center border border-black p-10 font-mt_smol ">
            <div className="font-mt_black text-2xl">
              Unemployed Reincarnation
            </div>{' '}
            <div className="font-mt_smol text-2xl my-5">
              Theme Song Collection CD
            </div>
            <div className="mt-5 w-10/12 flex justify-around">
              <Image
                src="/images/music/collection-1.jpg"
                alt="key visual"
                width={250}
                height={250}
                className="mx-5"
              ></Image>
              <Image
                src="/images/music/collection-2.jpg"
                alt="key visual"
                width={250}
                height={250}
                className="mx-5"
              ></Image>
            </div>
            <div className=" w-10/12 text-xs mt-20">
              Product Information Unemployed Tensei: Isekai Igarashi de
              Honkidasu" Theme Song Collection
            </div>
            <div className=" w-10/12">
              {collectionData.map((data) => {
                return <div className=" text-xs mt-2">{data.name}</div>;
              })}
            </div>
            <div className="w-10/12">
              <div className="mt-5">Store-specific benefits for purchasers</div>
              <div className="mt-2 mb-5">TOHO animation STORE: Can badge </div>
              <Image
                src="/images/music/collection-3.jpg"
                alt="key visual"
                width={228}
                height={228}
              ></Image>
              <div className="my-5">Animate: L size bromide</div>
              <Image
                src="/images/music/collection-4.jpg"
                alt="key visual"
                width={190}
                height={270}
              ></Image>
              <div className="my-5">Amazon: Mega Jacket</div>
              <Image
                src="/images/music/collection-5.jpg"
                alt="key visual"
                width={228}
                height={230}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default collection;
