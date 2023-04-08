import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormComponentService {
  constructor() {}

  setStorage(user: number, userData: object) {
    localStorage.setItem(`userId${user}`, `${JSON.stringify(userData)}`);
  }
}
