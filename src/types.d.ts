export interface ISetting {
  title: string;
  options: string[];
}

export interface IProduct {
  id: number;
  img: string;
  title: string;
  text: string;
  desc: string;
  price: number;
  gender: string;
  category: string;
  settings: ISetting[];
  isFeatured: boolean;
  amount: number;
}

export interface IOffer {
  id: number;
  subtitle: string;
  title: string;
  img: string;
  height: number;
  width: number;
  route: string;
}

export interface ICategories {
  gender: string;
  categories: string[];
}

export interface IParams {
  gender?: string;
  cat?: string;
}
