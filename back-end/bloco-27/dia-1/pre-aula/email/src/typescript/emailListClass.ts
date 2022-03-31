import Email from './emailClass';

export default class MailList {
  constructor(private mailList: Email[] = []) {
  }

  get getAll(): Email[] {
    return this.mailList;
  }

  getByEmailFrom(mailAddres: string): Email[] {
    return this.mailList.filter(({ from }) => mailAddres === from);
  }

  getByEmailTo(mailAddres: string): Email[] {
    return this.mailList.filter(({ to }) => mailAddres === to);
  }

  getBySubject(searchTerm: string): Email[] {
    return this.mailList.filter(({ subject }) => (
      subject.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  addMail(newEmail: Email): void {
    this.mailList.push(newEmail);
  }

  removeMail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter(({ from, to, subject }) => (
      mailToRemove.from !== from
      || mailToRemove.to !== to 
      || mailToRemove.subject !== subject));
  }
}