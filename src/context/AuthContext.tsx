'use client';

import { SignInSchemaType, SignUpSchemaType } from '@/lib/validations/user/user.schema';
import { getUserApi, signInApi, signOutApi, signUpApi } from '@/services/auth.service';
import { IUser } from '@/types';
import { handleError } from '@/utils/handleError';
import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import toast from 'react-hot-toast';

type T_AuthAction =
  | { type: 'PENDING' }
  | { type: 'SIGN_IN'; payload: IUser }
  | { type: 'SIGN_UP'; payload: IUser }
  | { type: 'ERROR'; payload: string }
  | { type: 'SIGN_OUT' }
  | { type: 'USER_LOADED'; payload: IUser };

type T_AuthContext = {
  user: IUser | null;
  isAuthenticated: boolean;
  isPending: boolean;
  error: unknown | null;
  signIn: (values: SignInSchemaType) => Promise<void>;
  signUp: (values: SignUpSchemaType) => Promise<void>;
  signOut: () => Promise<void>;
};

const initialState: T_AuthContext = {
  user: null,
  isAuthenticated: false,
  error: null,
  isPending: true,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
};

export const AuthContext = createContext<T_AuthContext>(initialState);

function authReducer(state: T_AuthContext, action: T_AuthAction): T_AuthContext {
  switch (action.type) {
    case 'PENDING':
      return {
        ...state,
        isPending: true,
      };
    case 'ERROR':
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload,
        isPending: false,
        isAuthenticated: true,
      };

    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
        isPending: false,
        isAuthenticated: true,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
        isPending: false,
        isAuthenticated: false,
      };
    case 'USER_LOADED':
      return {
        ...state,
        user: action.payload,
        isPending: false,
        isAuthenticated: true,
      };
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const router = useRouter();

  // *********** Sign In

  const signIn = async (values: SignInSchemaType) => {
    dispatch({ type: 'PENDING' });
    try {
      const { user, message } = await signInApi(values);
      console.log(user);

      dispatch({ type: 'SIGN_IN', payload: user });
      toast.success(message);
      router.push('/profile');
    } catch (error: unknown) {
      const message = handleError(error);
      dispatch({ type: 'ERROR', payload: message });
      toast.error(message);
    }
  };

  // *********** Sign Up

  const signUp = async (values: SignUpSchemaType) => {
    dispatch({ type: 'PENDING' });
    try {
      const { user, message } = await signUpApi(values);
      dispatch({ type: 'SIGN_UP', payload: user });
      toast.success(message);
      router.push('/profile');
    } catch (error: unknown) {
      const message = handleError(error);
      dispatch({ type: 'ERROR', payload: message });
      toast.error(message);
    }
  };

  // *********** Sign Out
  const signOut = async () => {
    dispatch({ type: 'PENDING' });
    try {
      await signOutApi();
      dispatch({ type: 'SIGN_OUT' });
    } catch (error: unknown) {
      const message = handleError(error);
      dispatch({ type: 'ERROR', payload: message });
    }
  };

  // *********** Get User Data
  const getUserData = async () => {
    dispatch({ type: 'PENDING' });
    try {
      const { user } = await getUserApi();
      dispatch({ type: 'USER_LOADED', payload: user });
    } catch (error: unknown) {
      const message = handleError(error);
      dispatch({ type: 'ERROR', payload: message });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserData();
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth should be used within AuthProvider.');
  }

  return context;
}
