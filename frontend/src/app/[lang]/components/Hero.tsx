import HighlightedText from './HighlightedText';
import { getStrapiMedia } from '../utils/api-helpers';

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    picture: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  console.log(data.title);
  const imgUrl = getStrapiMedia(data.picture.data.attributes.url);

  const style = {
    backgroundImage: imgUrl,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <section>
      {/* <div style={{ backgroundImage: `url(${imgUrl})`,  }}> */}
      <div
        style={{ backgroundImage: `url(${style.backgroundImage})` }}
        className='grid items-center justify-center text-center xl:py-20 xl:bg-cover bg-[center_top_-5rem] bg:no-repeat '
      >
        <div>
          <HighlightedText
            text={data.title}
            tag='h1'
            className={
              data.title === 'About Us'
                ? 'text-5xl font-bold leading-none sm:text-6xl mb-8 text-amber-300'
                : 'text-5xl font-bold leading-none sm:text-6xl mb-8 text-violet-100'
            }
            color='dark:text-violet-900'
          />

          <HighlightedText
            text={data.description}
            tag='p'
            className='mb-8 text-lg sm:mb-12 text-white font-semibold '
            color='dark:text-violet-400'
          />
          {/* <div className='flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-center'>
            {data.buttons.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button.url}
                target={button.newTab ? '_blank' : '_self'}
                className={renderButtonStyle(button.type)}
              >
                {button.text}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
