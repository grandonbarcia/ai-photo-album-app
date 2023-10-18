'use server';
import cloudinary from 'cloudinary';

export async function setAsFavoriteAction(publicId: string) {
  await cloudinary.v2.uploader.add_tag('favorite', [publicId]);
}
