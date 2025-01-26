import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HashService {
  async hashPassword(raw_password: string): Promise<string> {
    const saltRounds = bcrypt.genSaltSync();
    return await bcrypt.hash(raw_password, saltRounds);
  }
  async compare_password(raw_password: string, hashPassword: string) {
    return await bcrypt.compare(raw_password, hashPassword);
  }
}
