import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
  async hashPassword(rawPassword: string): Promise<string> {
    const saltRounds = bcrypt.genSaltSync();
    return await bcrypt.hash(rawPassword, saltRounds);
  }
  async comparePassword(rawPassword: string, hashPassword: string) {
    return await bcrypt.compare(rawPassword, hashPassword);
  }
}
