export interface Token {
  id?: number;
  token: string;
  expires: Date;
  accountId: number;
}
