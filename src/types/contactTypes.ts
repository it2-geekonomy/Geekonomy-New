export type FormData = {
  fname: string;
  lname: string;
  email: string;
  pnum: string;
  message: string;
};

export type Errors = Partial<Record<keyof FormData, string>>;
