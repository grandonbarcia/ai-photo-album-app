'use client';
import { CloudinaryImage } from '@/components/cloudinary-image';
import { SearchResult } from '@/app/gallery/page';
import React, { ReactNode } from 'react';

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  const MAX_COL = 4;

  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COL === colIndex;
    });
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
