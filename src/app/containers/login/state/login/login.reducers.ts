import { Action } from '@ngrx/store';
import { LoginAction } from './login.actions';

export interface LoginState {
    greedings: string[];
    error: any;
    status: boolean;
}

export const initialState: LoginState = {
    greedings: ['Welcome Back'],
    error: null,
    status: false
};

// reducers

const loginHandler = (state: LoginState = initialState, action: Action): LoginState => {
    return state;
};

const handlers = {
    [LoginAction.type]: loginHandler
};

export const LoginReducer = (state: LoginState = initialState, action: Action): LoginState => {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
};

// selectors
export const selectLogin = (state: any) => (state.login);

export const selectGreedings = (state: LoginState) => (state.greedings);

export const selectOneOfGreedings = (state: LoginState) => (state.greedings[Math.random() * (state.greedings.length - 1)]);


