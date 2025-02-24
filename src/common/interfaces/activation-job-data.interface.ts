export interface SendSecretCodeJobData {
  to: string;
  secretCode: string;
  codeExpried: Date;
}
