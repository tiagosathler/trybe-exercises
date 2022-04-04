import Email from './emailClass';

export default class MailList {
  constructor(private mailList: Email[] = []) {
  }

  public get all(): Email[] {
    return this.mailList;
  }

  public getByEmailFrom(mailAddres: string): Email[] {
    return this.mailList.filter(({ from }) => mailAddres === from);
  }

  public getByEmailTo(mailAddres: string): Email[] {
    return this.mailList.filter(({ to }) => mailAddres === to);
  }

  public getBySubject(searchTerm: string): Email[] {
    return this.mailList.filter(({ subject }) => (
      subject.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  public addEmail(newEmail: Email): void {
    this.mailList.push(newEmail);
  }

  public removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter(({ from, to, subject }) => (
      mailToRemove.from !== from
      || mailToRemove.to !== to 
      || mailToRemove.subject !== subject));
  }
}