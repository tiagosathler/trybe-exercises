export type TMessage = {
  message: string;
}

export type TMessages = TMessage[];

export type TError = {
  name: string;
  details: TMessages;
  message: string;
}