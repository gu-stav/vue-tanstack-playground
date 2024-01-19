import { inject } from 'vue';
import type { InjectionKey } from 'vue';

export const AuthenticatedUser: InjectionKey<{ data: {}, refetch: () => void }> = Symbol('AuthenticatedUser');

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
    const resolved = inject(key, fallback);

    if (!resolved) {
      throw new Error(`Could not resolve ${key.description}`);
    }

    return resolved;
  }
