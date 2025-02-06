import slugify from 'slugify';

export function createSlug(rawName: string) {
  const genSlug = {
    replacement: '-',
    trim: true,
    lower: true,
  };
  return slugify(rawName, genSlug);
}
