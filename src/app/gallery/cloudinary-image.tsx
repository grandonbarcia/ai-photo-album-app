'use client';
import { Heart } from '@/components/icons/heart';
import { FullHeart } from '@/components/icons/full-heart';
import { CldImage } from 'next-cloudinary';
import cloudinary from 'cloudinary';
import { setAsFavoriteAction } from './actions';
import { useTransition } from 'react';
import { SearchResult } from './page';

export function CloudinaryImage(props: any & { imageData: SearchResult }) {
  const [transition, startTransition] = useTransition();

  const isFavorited = props.imageData.tags.includes('favorite');

  return (
    <div className="relative">
      <CldImage {...props} src={props.imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(props.imageData.public_id, false);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(props.imageData.public_id, true);
            });
          }}
          className="absolute top-2 right-2 hover:text-red-500 cursor-pointer"
        />
      )}
    </div>
  );
}
