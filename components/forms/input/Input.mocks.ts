import { IInputProps } from './Input';

const base: IInputProps = {
  type: 'text',
  name: 'test',
  label: 'Test Input Label',
  required: true,
  placeholder: 'Enter text',
  validationPattern: '^.{3,}$',
  validationMessage: 'Please enter a value',
};

export const mockInputProps = {
  base,
};
