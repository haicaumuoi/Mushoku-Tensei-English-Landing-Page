import React from 'react';
import Image from 'next/image';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import Link from 'next/link';

function Sidebar() {
  return (
    <div className="flex flex-col h-screen bg-sidebar shadow w-75 bg-cover pl-6 py-10 sticky top-0 shrink-0">
      <div className="space-y-3 z-10">
        <Link href={'/'}>
          <button className="flex items-center justify-center pr-5">
            <Image
              src="/images/title.png"
              alt="title"
              width={150}
              height={90}
            />
          </button>
        </Link>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm leading-6">
            <Link href={'/onair'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>ON AIR</span>
                </a>
              </li>
            </Link>
            <Link href={'/introduction'}>
              <li className="rounded-sm">
                <span className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest cursor-pointer">
                  INTRODUCTION
                </span>
              </li>
            </Link>
            <Link href={'/story'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>STORY</span>
                </a>
              </li>
            </Link>
            <Link href={'/character'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>CHARACTER</span>
                </a>
              </li>
            </Link>
            <Link href={'/movie'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>MOVIE</span>
                </a>
              </li>
            </Link>
            <Link href={'/bluray'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>BLURAY</span>
                </a>
              </li>
            </Link>
            <Link href={'/music'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>MUSIC</span>
                </a>
              </li>
            </Link>
            <Link href={'/radio'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>RADIO</span>
                </a>
              </li>
            </Link>
            <Link href={'/books'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>BOOKS</span>
                </a>
              </li>
            </Link>
            <Link href={'/special'}>
              <li className="rounded-sm">
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md font-mt_black text-white tracking-widest"
                >
                  <span>SPECIAL</span>
                </a>
              </li>
            </Link>
            <li className="rounded-sm flex items-center">
              <a
                href="https://www.facebook.com/hainnnnnnnnn/"
                target={'_blank'}
                className="p-2 text-white text-2xl "
              >
                <span>
                  <BsFacebook />
                </span>
              </a>
              <a
                href="https://github.com/HaiCauMuoi"
                target={'_blank'}
                className="p-2 text-white text-2xl ml-3"
              >
                <span>
                  <BsGithub />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
