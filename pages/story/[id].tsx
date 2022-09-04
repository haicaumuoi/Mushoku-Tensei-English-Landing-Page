import { storyData } from '../../public/content/story_data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import opacityChange from '../../components/utilities/opacityChange';

export const getStaticProps = async () => {
  const data = storyData;

  return {
    props: {
      episodeData: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = storyData.map((post) => ({
    params: { id: post.id },
  }));
  return {
    fallback: true,
    paths,
  };
};

function Story({
  episodeData,
}: {
  episodeData: [
    {
      id: string;
      name: string;
      img1: string;
      img2: string;
      img3: string;
      img4: string;
      img5: string;
      synopsis: string;
    }
  ];
}) {
  const router = useRouter();
  const query = router.query;

  const uid = query.id;
  const episode = episodeData.find((data) => data.id === uid);

  const [toggle, setToggle] = useState(episode?.img1);

  const changeImage = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();

    const image: string = event.currentTarget.id;
    switch (image) {
      case '1':
        setToggle(episode?.img1);
        opacityChange('div1', 'div2', 'div3', 'div4', 'div5');
        break;
      case '2':
        setToggle(episode?.img2);
        opacityChange('div2', 'div1', 'div3', 'div4', 'div5');
        break;
      case '3':
        setToggle(episode?.img3);
        opacityChange('div3', 'div2', 'div1', 'div4', 'div5');
        break;
      case '4':
        setToggle(episode?.img4);
        opacityChange('div4', 'div2', 'div3', 'div1', 'div5');
        break;
      case '5':
        setToggle(episode?.img5);
        opacityChange('div5', 'div2', 'div3', 'div4', 'div1');
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-32">
        <div>
          <Image
            src="/images/story.svg"
            alt="story"
            width={250}
            height={50}
          ></Image>
        </div>

        <div className="w-full h-14 flex flex-col items-center my-10">
          <h1 className="font-mt_black my-2 bg-text_bg">{`#${episode?.id}`}</h1>
          <h1 className="font-mt_black my">{episode?.name}</h1>
        </div>

        <div className="w-2/3 h-img_story relative">
          <Image
            src={toggle}
            alt="episode image"
            layout="fill"
            objectFit="contain"
            priority
            objectPosition="left"
            onClick={() => changeImage}
          ></Image>
        </div>

        <div className="w-2/3 h-28 my-2 flex justify-between">
          <div
            className="w-17.5 relative cursor-pointer transition-all"
            defaultValue="1"
            id="div1"
          >
            <Image
              src={episode?.img1}
              alt="episode image"
              layout="fill"
              objectFit="contain"
              priority
              onClick={changeImage}
              id="1"
            ></Image>
          </div>

          <div
            className="w-17.5 relative cursor-pointer transition-all opacity-40"
            defaultValue="2"
            id="div2"
          >
            <Image
              src={episode?.img2}
              alt="episode image"
              layout="fill"
              objectFit="contain"
              priority
              onClick={changeImage}
              id="2"
            ></Image>
          </div>

          <div
            className="w-17.5 relative cursor-pointer transition-all opacity-40"
            defaultValue="3"
            id="div3"
          >
            <Image
              src={episode?.img3}
              alt="episode image"
              layout="fill"
              objectFit="contain"
              priority
              onClick={changeImage}
              id="3"
            ></Image>
          </div>

          <div
            className="w-17.5 relative cursor-pointer transition-all opacity-40"
            defaultValue="4"
            id="div4"
          >
            <Image
              src={episode?.img4}
              alt="episode image"
              layout="fill"
              objectFit="contain"
              priority
              onClick={changeImage}
              id="4"
            ></Image>
          </div>

          <div
            className="w-17.5 relative cursor-pointer transition-all opacity-40"
            defaultValue="5"
            id="div5"
          >
            <Image
              src={episode?.img5}
              alt="episode image"
              layout="fill"
              objectFit="contain"
              priority
              id="5"
              onClick={changeImage}
            ></Image>
          </div>
        </div>

        <div className="w-2/3 h-28 my-2 font-mt_smol">{episode?.synopsis}</div>
      </div>
    </div>
  );
}

export default Story;
