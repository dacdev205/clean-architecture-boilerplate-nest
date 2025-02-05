import * as nodemailer from 'nodemailer';
import { ActivationJobData } from '~/common/interfaces/activation-job-data.interface';
import { EmailJobData } from '~/common/interfaces/email-job-data.interface';
import { ResetPassJobData } from '~/common/interfaces/reset-pass-job-data.interface';
import { contentEmail } from 'src/content/email';
import { Inject, Injectable } from '@nestjs/common';
import { HandlebarsService } from './../handlebar/handlebar.service';
import { EmailModuleOption } from '~/common/interfaces/email.interfaces';
import { MAIL_SERVICE } from '~/common/constants/email.constants';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;
  constructor(
    @Inject('EMAIL_OPTIONS') private readonly options: EmailModuleOption,
    private readonly handlebarsService: HandlebarsService,
  ) {
    if (!this.transporter) {
      this.transporter = nodemailer.createTransport({
        host: this.options.smtpHost,
        port: parseInt(this.options.smtpPort),
        service: this.options.service,
        auth: {
          user: this.options.user,
          pass: this.options.pass,
        },
      });
    }
  }

  async sendResetPassEmail(resetPassJobData: ResetPassJobData): Promise<void> {
    const { to, resetCode } = resetPassJobData;
    const templateContent = await this.handlebarsService.compileTemplate(
      contentEmail.sendResetPassCode.content,
      { resetCode },
    );
    const emailJobData: EmailJobData = {
      to: to,
      subject: contentEmail.sendResetPassCode.subject,
      html: templateContent,
    };
    if (this.options.service === MAIL_SERVICE.SMTP) {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to: emailJobData.to,
        subject: emailJobData.subject,
        html: emailJobData.html,
      });
    } else if (this.options.service === MAIL_SERVICE.SEND_GRID) {
      console.log(MAIL_SERVICE.LOG_WITH_SEND_GRID);
    }
  }
  async sendActivationEmail(
    activationJobData: ActivationJobData,
  ): Promise<void> {
    const { to, activationCode } = activationJobData;
    const templateContent = await this.handlebarsService.compileTemplate(
      contentEmail.sendActivationCode.content,
      { activationCode },
    );
    const emailJobData: EmailJobData = {
      to: to,
      subject: contentEmail.sendActivationCode.subject,
      html: templateContent,
    };
    if (this.options.service === MAIL_SERVICE.SEND_GRID) {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to: emailJobData.to,
        subject: emailJobData.subject,
        html: emailJobData.html,
      });
    } else if (this.options.service === MAIL_SERVICE.SEND_GRID) {
      console.log(MAIL_SERVICE.LOG_WITH_SEND_GRID);
    }
  }
}
