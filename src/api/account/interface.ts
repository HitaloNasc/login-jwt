export interface Account {
  id?: number;
  name: string;
  password: string;
  email: string;
  type?: number;
  status?: number;
  created?: Date;
  updated?: Date;
}
