export type InputTypes =
  | 'text'
  | 'password'
  | 'email'
  | 'checkbox'
  | 'radio'
  | 'hidden';

export type TypedFormEvent<T> = React.FormEvent<
  HTMLFormElement & {
    elements: T & HTMLFormControlsCollection;
  }
>;

export interface IFormItem {
  type: InputTypes;
  required: boolean;
  value: string;
  valid: boolean;
}

export type FormHashMap = {
  [name: string]: IFormItem;
};

export interface IRegisterForm {
  title: HTMLInputElement;
  name: HTMLInputElement;
  phone: HTMLInputElement;
  email: HTMLInputElement;
  username: HTMLInputElement;
  password: HTMLInputElement;
  newsletter: HTMLInputElement;
  terms: HTMLInputElement;
  admin: HTMLInputElement;
}

export interface ILoginForm {
  username: HTMLInputElement;
  password: HTMLInputElement;
}

export interface IElementPayload {
  name: string;
  value: string;
  isValid?: boolean;
}

export type PayloadFunctionType = (payload: IElementPayload) => void;
