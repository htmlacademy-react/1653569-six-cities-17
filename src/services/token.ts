const AUTH_TOKEN = 'six-cities-token';

export const getToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ?? '';
};

export const setToken = (token: string): void => {
  localStorage.setItem(AUTH_TOKEN, token);
};

export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};
