export interface EmailModuleOption {
  service: 'smtp' | 'sendgrid';
  apiKey?: string;
  smtpHost?: string;
  smtpPort?: string;
  user?: string;
  pass?: string;
}
