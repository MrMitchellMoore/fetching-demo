export type Characters = {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name: string;
    url: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
};

export type Respository = {
  id: number;
  name: string;
  full_name: string;
};
