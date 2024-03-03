import Image from 'next/image';
import { getStrapiMedia } from '../utils/api-helpers';

interface SocialMediaProps {
  data: {
    id: string;
    text: RichTextProps;
    social: Social[];
  };
}
interface RichTextProps {
  data: {
    body: string;
  };
}

interface Social {
  url: string;
  media: Media;
}

interface Media {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

function Social({ media, url }: Social) {
  const imageUrl = getStrapiMedia(media.data.attributes.url);
  return (
    <div>
      <div>
        <div className='my-2 '>
          <a href={url} target='_blank'>
            <div>
              <Image
                src={imageUrl || ''}
                alt={media.data.attributes.alternativeText || 'none provided'}
                className='inline-block transition-transform hover:scale-125'
                width={50}
                height={20}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SocialMedia({ data }: SocialMediaProps) {
  return (
    <section className='flex justify-evenly md:justify-center lg:justify-center gap-10 bg-indigo-50'>
      {data.social.map((social: Social, index: number) => (
        <Social key={index} {...social} />
      ))}
    </section>
  );
}
