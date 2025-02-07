import slugify from 'slugify';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenSlugService {
  async createSlug(rawName: string): Promise<string> {
    const genSlug = {
      replacement: '-',
      trim: true,
      lower: true,
    };
    return slugify(rawName, genSlug);
  }
  async genSlug(name: string): Promise<string> {
    const slug = this.createSlug(name);
    return slug;
  }
}
