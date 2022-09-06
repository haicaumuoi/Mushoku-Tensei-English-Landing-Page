import React from 'react';
import Image from 'next/image';
import { onairData } from '../public/content/onair';

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
          {onairData.map((site) => {
            return (
              <li className="my-5 hover:opacity-40 transition-opacity">
                <a href={site.link} target={'_blank'}>
                  {site.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="my-5 w-1/3 text-center">
        *Distribution periods may vary depending on the service. For details,
        please check with each delivery service.
      </p>
    </div>
  );
}

export default onair;
