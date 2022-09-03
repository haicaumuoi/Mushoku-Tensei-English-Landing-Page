import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function onair() {
  return (
    <div className="flex flex-col items-center mt-36">
      <Image
        src="/images/on-air.svg"
        alt="story"
        width={220}
        height={42}
      ></Image>

      <div className="mt-20">
        <Image
          src="/images/on-air-title.png"
          alt="story"
          width={595}
          height={250}
        ></Image>
      </div>

      <div className="font-mt_smol text-xl mt-8">
        <p>VIEWING SITES</p>
        <ul className="flex flex-col items-center mt-5">
          <li className="my-3">
            <a
              href="https://www.disneyplus.com/series/mushoku-tensei-jobless-reincarnation/5Y5wbhrBl6qZ"
              target={'_blank'}
            >
              Disney+
            </a>
          </li>

          <li className="my-3">
            <a
              href="https://www.amazon.com/Mushoku-Tensei-Jobless-Reincarnation-Simuldub/dp/B09BDR8DXR"
              target={'_blank'}
            >
              Amazon Prime
            </a>
          </li>

          <li className="my-3">
            <a
              href="https://www.netflix.com/vn-en/title/80987039"
              target={'_blank'}
            >
              Netflix
            </a>
          </li>
          <li className="my-3">
            <a
              href="https://www.hulu.com/series/mushoku-tensei-jobless-reincarnation-787a5fb4-9cba-4a69-96b2-4fb3b10c860a"
              target={'_blank'}
            >
              Hulu
            </a>
          </li>

          <li className="my-3">
            <a
              href="https://play.google.com/store/tv/show/Mushoku_Tensei_Jobless_Reincarnation_Original_Japa?id=bsde6PbDpx4.P&hl=en_US&gl=US"
              target={'_blank'}
            >
              Google Play
            </a>
          </li>

          <li className="my-3">
            <a
              href="https://www.youtube.com/playlist?list=PLwLSw1_eDZl01_ftoIT3birJWkpxFZkEl"
              target={'_blank'}
            >
              Muse Asia
            </a>
          </li>

          <li className="my-3">
            <a
              href="https://www.funimation.com/shows/mushoku-tensei-jobless-reincarnation/"
              target={'_blank'}
            >
              Funimation
            </a>
          </li>

          <li className="my-3">
            <a
              href="https://www.crunchyroll.com/mushoku-tensei-jobless-reincarnation"
              target={'_blank'}
            >
              Crunchyroll
            </a>
          </li>
        </ul>
      </div>
      <p className="my-5 w-1/2 text-center">
        *Distribution periods may vary depending on the service. For details,
        please check with each delivery service.
      </p>
    </div>
  );
}

export default onair;
