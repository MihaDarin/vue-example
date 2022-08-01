export interface IAddress {
  street: string;
  city: string;
  zeepcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}
