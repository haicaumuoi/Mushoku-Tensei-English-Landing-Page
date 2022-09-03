import React from 'react';
import Image from 'next/image';

export default function introduction() {
  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/introduction-line.svg"
          alt="story"
          width={400}
          height={170}
        ></Image>

        <div className="w-1/2 ">
          <div className="text-center my-2">
            The pioneer of the "Isekai" type of novels, "Jobless Reincarnation:
            I Will Seriously Try If I Go to Another World" has been{' '}
            <span className="bg-text_bg text-center">
              extremely popular since its serialization on the novel
            </span>{' '}
            submission website "Shosetsuka ni Naro" began in 2012.
          </div>

          <div className="text-center my-2 ">
            <span className="bg-text_bg w-fit">
              {' '}
              The second season of the TV anime will air in 2023!
            </span>
          </div>
          <div className="text-center my-2">
            Mushoku Tensei: Isekai Ittara Honki Dasu, otherwise known in English
            as Mushoku Tensei: Jobless Reincarnation is an{' '}
            <span className="bg-text_bg">
              {' '}
              Action Adventure series with the themes of second chances,
              redemption, and coming of age.
            </span>{' '}
          </div>
          <div className="text-center my-2">
            An unnamed 34-year-old Japanese NEET is evicted from his home
            following his parents' death. Upon some self-introspection, he
            concludes that his life was ultimately pointless. Walking down a
            street he intercepts a speeding truck heading towards a group of
            teenagers,{' '}
            <span className="bg-text_bg">
              {' '}
              in an attempt to do something meaningful for once in his life{' '}
            </span>
            he manages to pull one of them out of harm's way before getting
            himself in the way of the truck and dying. Awakening in a baby's
            body, he realizes he has been reincarnated in a world of{' '}
            <span className="bg-text_bg"> sword and sorcery.</span> He resolves
            to become successful in his new life, discarding his past identity
            for his new life as Rudeus Greyrat.
          </div>
          <div className="text-center my-2">
            The first 23 episodes of the first TV anime season aired in 2021,
            and now the second season,{' '}
            <span className="bg-text_bg">
              {' '}
              "Mushoku Tensei II: Jobless Reincarnation" will be broadcast in
              2023!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
