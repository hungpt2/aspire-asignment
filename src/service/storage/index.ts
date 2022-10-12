import { ITokenInfo } from '@/shared/models';
import { LOCAL_STORAGE_KEY } from '@/shared/constant';

export function setLocalStorageItem(key: string, data: any) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorageItem(key: string): any | null {
  const storageData: string | null = localStorage.getItem(key);
  return storageData ? JSON.parse(storageData) : null;
}

export function clearAllStorage() {
  localStorage.clear();
}

export function getAuthenticationStorageInfo(): ITokenInfo | null {
  const storageData: string | null = localStorage.getItem(
    LOCAL_STORAGE_KEY.authorization,
  );
  return storageData ? JSON.parse(storageData) : null;
}
