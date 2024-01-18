import type { InjectionKey } from 'vue';

export const AuthenticatedUser: InjectionKey<{ data: {}, refetch: () => void }> = Symbol('AuthenticatedUser');
