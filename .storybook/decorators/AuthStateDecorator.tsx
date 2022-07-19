import { useParameter } from '@storybook/addons';
import AuthContext, {
  defaultValue,
  IAuthContext,
} from 'context/auth/AuthContext';
import { useState } from 'react';

export default function AuthStateDecorator(Story: any) {
  console.log(defaultValue);
  const initialState = useParameter('authState', defaultValue) as IAuthContext;

  const [state, setState] = useState({ ...initialState });

  return (
    <AuthContext.Provider value={state}>
      <Story />
    </AuthContext.Provider>
  );
}
