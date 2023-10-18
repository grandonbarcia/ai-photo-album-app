'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

export default function Home() {
  const [imageId, setImageId] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        uploadPreset="jrqcew0d"
        onUpload={(results: any) => {
          setImageId(results);
        }}
      />
      {imageId && (
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
