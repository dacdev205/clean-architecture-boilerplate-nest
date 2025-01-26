import slugify from 'slugify';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenSlugService {
  async create_slug(raw_name: string): Promise<string> {
    const gen_slug = {
      replacement: '-',
      trim: true,
      lower: true,
    };
    return slugify(raw_name, gen_slug);
  }
  async genSlug(name: string): Promise<string> {
    const slug = this.create_slug(name);
    return slug;
  }
}
