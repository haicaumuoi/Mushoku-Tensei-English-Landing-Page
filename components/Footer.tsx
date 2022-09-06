import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="mt-24">
      <div className="w-[48%] flex justify-between items-center mx-auto">
        <a
          href="https://sevenseasentertainment.com/series/mushoku-tensei-jobless-reincarnation-light-novel/"
          className="hover:opacity-40 transition-opacity"
          target={'_blank'}
        >
          <Image
            src="/images/footer1.jpg"
            alt="key visual"
            width={288}
            height={82}
          ></Image>
        </a>
        <a
          href="https://www.reddit.com/r/mushokutensei/"
          className="hover:opacity-40 transition-opacity"
          target={'_blank'}
        >
          <Image
            src="/images/footer2.jpg"
            alt="key visual"
            width={288}
            height={82}
          ></Image>
        </a>
      </div>

      <div className="font-mt_black mt-20 text-2xl border-b-8 border-b-black leading-[0.01em] text-center mx-auto w-full">
        <span className="bg-white w-1/2 px-4">
          MUSHOKU TENSEI SEASON 2 HAS BEEN ANOUNCED
        </span>
      </div>
      <div className="font-mt_smol pb-10 mx-auto w-1/2 text-xs flex flex-col items-center">
        <div className="mt-5">Design ©Copyright by Mushoku Tensei Page</div>
        <div>Landing Site ©Copyright by Hai Cau Muoi </div>
      </div>
    </div>
  );
}

export default Footer;
