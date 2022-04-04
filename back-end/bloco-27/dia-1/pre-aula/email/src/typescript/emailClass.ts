export default class Email {
  private _from: string;

  private _to: string;

  private _subject: string;

  private _message: string;

  constructor(
    from: string,
    to: string,
    subject: string,
    message: string,
  ) {
    this._from = from;
    this._to = to;
    this._subject = subject;
    this._message = message;
  }

  public set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  public get subject():string {
    return this._subject;
  }

  public get from():string {
    return this._from;
  }

  public get to():string {
    return this._from;
  }

  public get content():string {
    const phrase = `
      From ${this._from} to ${this._to};
      Subject: ${this._subject};
      
      Message: ${this._message}`;
    return phrase;
  }
}