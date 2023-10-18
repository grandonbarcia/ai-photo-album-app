'use client';
import { Heart } from '@/components/icons/heart';
import { CldImage } from 'next-cloudinary';
import cloudinary from 'cloudinary';
import { setAsFavoriteAction } from './actions';
import { useTransition } from 'react';

export function CloudinaryImage(props: any & { publicId: string }) {
  const [transition, startTransition] = useTransition();

  return (
    <div className="relative">
      <CldImage {...props} />
      <Heart
        onClick={() => {
          startTransition(() => {
            setAsFavoriteAction(props.publicId);
          });
        }}
        className="absolute top-2 right-2"
      />
    </div>
  );
}
