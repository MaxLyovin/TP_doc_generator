import { UserData } from '@/@types/userData';

const storageKey = 'userData';

class UserDataStorage {
  set(userData: UserData) {
    localStorage.setItem(storageKey, JSON.stringify(userData));
  }

  get() {
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : undefined;
  }

  clear() {
    localStorage.removeItem(storageKey);
  }
}

export const userDataStorage = new UserDataStorage();
