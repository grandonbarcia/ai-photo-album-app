'use client';
import { Heart } from '@/components/icons/heart';
import { FullHeart } from '@/components/icons/full-heart';
import { CldImage, CldImageProps } from 'next-cloudinary';
import cloudinary from 'cloudinary';
import { setAsFavoriteAction } from '../app/gallery/actions';
import { useState, useTransition } from 'react';
import { SearchResult } from '../app/gallery/page';
import { ImageMenu } from './ui/image-menu';

export function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnHeart?: (unheartedResource: SearchResult) => void;
    [key: string]: any;
  } & Omit<CldImageProps, 'src'>
) {
  const [transition, startTransition] = useTransition();

  const { imageData, onUnHeart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes('favorite')
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnHeart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              setAsFavoriteAction(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
        />
      )}
      <ImageMenu image={imageData} />
    </div>
  );
}
