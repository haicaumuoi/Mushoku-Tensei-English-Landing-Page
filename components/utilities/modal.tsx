import React, { FunctionComponent } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';

function Modal(closeModal: FunctionComponent, video: string, isOpen: boolean) {
  return (
    <div
      className="hidden fixed w-screen h-screen bg-black top-0 left-0 z-20"
      id="modal"
    >
      <div className="bg-modalBg bg-contain bg-no-repeat bg-center z-30 h-screen">
        <div className="absolute top-6 right-6 w-10 h-10">
          <div
            className="w-full h-full bg-closeModal rounded-full cursor-pointer hover:brightness-50 bg-center bg-no-repeat bg-contain shadow-none outline-none"
            onClick={closeModal}
          ></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ReactPlayer
            width={854}
            height={480}
            controls={true}
            url={video}
            playing={isOpen}
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
