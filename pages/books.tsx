import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { booksData } from '../public/content/books';

export default function books() {
  return (
    <div className="overflow-y-visible">
      <div className="flex flex-col items-center mt-28">
        <div>
          <Image
            src="/images/book.svg"
            alt="story"
            width={200}
            height={80}
          ></Image>
        </div>
      </div>

      <div className="w-[60%] mx-auto mt-10">
        <ul className="flex flex-col ">
          {booksData.map((book) => {
            return (
              <li className="w-full flex border-b border-b-black pb-10 mt-8">
                <div className="">
                  <Image
                    src={book.img}
                    alt="key visual"
                    width={255}
                    height={363}
                  ></Image>
                </div>
                <div className=" ml-8  flex flex-col">
                  {' '}
                  <div className="font-mt_black">{book.name}</div>
                  <div className="mt-5 font-mt_smol">
                    Category: {book.category}
                  </div>
                  <div className="mt-5 font-mt_smol">
                    More information{' '}
                    <a
                      className="text-blue-500 hover:opacity-40 transition-opacity"
                      href={book.link}
                      target="_blank"
                    >
                      click here
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
