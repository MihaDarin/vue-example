export interface IAdress {
  street: string;
  city: string;
  zeepcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  adress: IAdress;
}
