import { resolve } from 'path';
import dotenv from 'dotenv';
import { DEFAULT_NODE_ENV } from '~/common/constants/env.constants';
export const readEnvFilePath = (path: string) => {
  const envVaribles = dotenv.config({ path: path.trim() });
  return envVaribles;
};

export const getCurrentEnvFilePath = (): string => {
  return resolve(
    process.cwd(),
    `.env.${process.env.NODE_ENV || DEFAULT_NODE_ENV}`,
  );
};
