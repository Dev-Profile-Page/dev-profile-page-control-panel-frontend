export enum LocalStorageKeys {
  ACCESS_TOKEN = 'accessToken',
};

export function getLocalStorage(key: string) {
  return window.localStorage.getItem(key);
}

export function setLocalStorage(key: string, value: any) {
  window.localStorage.setItem(key, value.toString());
}

export function removeLocalStorage(key: string) {
  window.localStorage.removeItem(key);
}