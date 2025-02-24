import * as fs from 'fs';
import path, { resolve } from 'path';
import * as handlebars from 'handlebars';
import { Injectable } from '@nestjs/common';
@Injectable()
export class HandlebarsService {
  async compileTemplate(
    contentTemplateName: string,
    activationLink: string,
  ): Promise<any> {
    const dirPath = resolve(process.cwd(), 'src/templates');
    const baseDir = path.join(dirPath, 'base/base-email-template.hbs');
    const contentDir = path.join(
      dirPath,
      `emails/${contentTemplateName}.template.hbs`,
    );

    const baseTemplate = fs.readFileSync(baseDir, 'utf8');
    const contentTemplate = fs.readFileSync(contentDir, 'utf8');

    const base = handlebars.compile(baseTemplate);
    const content = handlebars.compile(contentTemplate);

    const contentHtml = content({ activationLink });

    const html = base({ body: contentHtml });

    return html;
  }
}
