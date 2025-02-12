// import { Inject, Injectable } from '@nestjs/common';
// import {
//   BRAND_REPOSITORY,
//   BrandRepository,
// } from '~/application/repositories/brands.repositoies-v2';
// import { CreateBrandDto } from '~/application/dtos/brands';
// import { Brand } from '@prisma/client';
// import { GenSlugService } from '~/application/utils/gen-slug.service';

// @Injectable()
// export class CreateBrandUseCase {
//   constructor(
//     @Inject(BRAND_REPOSITORY)
//     private readonly _brandRepository: BrandRepository,
//     private readonly _genSlugService: GenSlugService,
//   ) {}
//   async execute(requestBody: CreateBrandDto): Promise<Brand> {
//     const slug = await this._genSlugService.genSlug(requestBody.name);
//     const brand = await this._brandRepository.create({
//       data: {
//         name: requestBody.name,
//         slug,
//       },
//     });
//     return brand;
//   }
// }
