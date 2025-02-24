import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GenerateTokenService {
  private _secretKey = process.env.JWT_GENERATE_SECRET_KEY as string;

  async generateToken(
    email: string,
    secretCode: string,
    codeExpried: Date,
  ): Promise<string> {
    const data = {
      email,
      secretCode,
      codeExpried,
    };
    const token = jwt.sign(data, this._secretKey, {
      expiresIn: '5m',
    });
    return token;
  }

  async decodeToken(
    token: string,
  ): Promise<{ email: string; secretCode: string; codeExpried: Date } | null> {
    try {
      const decoded = jwt.verify(token, this._secretKey) as {
        email: string;
        secretCode: string;
        codeExpried: Date;
      };
      return {
        email: decoded.email,
        secretCode: decoded.secretCode,
        codeExpried: decoded.codeExpried,
      };
    } catch (error) {
      return null;
    }
  }
}
