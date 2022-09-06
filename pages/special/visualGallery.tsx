import React, { useState } from 'react';
import Image from 'next/image';
import { specialData } from '../../public/content/special';
import Link from 'next/link';

function visualGallery() {
  const [toggle, setToggle] = useState(specialData[0].img);

  const changeImage = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const image: string = event.currentTarget.id;
    setToggle(specialData[parseInt(image) - 1].img);
  };
  return (
    <div className="overflow-y-visible">
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

      <div className="w-[60%] mx-auto mt-10">
        <div className="flex justify-between">
          <ul>
            {specialData.map((data) => {
              return (
                <li>
                  <div
                    className="font-mt_black mb-5 cursor-pointer hover:opacity-50 transition-all"
                    id={data.id}
                    onClick={changeImage}
                  >
                    {' '}
                    Key Visual #{data.id}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col">
            <div className="border-l border-l-black pl-10">
              <Image
                src={toggle}
                alt="key visual"
                width={570}
                height={805}
              ></Image>
            </div>
            <Link href="/special">
              <div className="w-[10.5rem] my-10 p-1 border-black border flex items-center justify-center hover:opacity-40 transition-opacity cursor-pointer ml-20">
                {' '}
                <div className="w-40 h-8 border border-black uppercase flex items-center justify-center font-mt_black">
                  BACK
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default visualGallery;
