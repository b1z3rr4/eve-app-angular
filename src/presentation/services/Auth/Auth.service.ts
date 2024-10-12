import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { auth } from '../../../application/libs/firebase';
import { CACHE_KEY, SESSION_EXPIRATION_MS } from '../../../application/constants/localStorage';
import { ToastrService } from 'ngx-toastr';
import { IError } from '../../../application/interfaces/error';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private dataSubject = new BehaviorSubject<User | null>(null);
  public currentData = this.dataSubject.asObservable();

  constructor(private toastr: ToastrService, private router: Router) {
    this.currentData.subscribe(data => {
      const cachedUser = this.getSessionCache();

      if (cachedUser) {
        this.updateData(cachedUser);
      }
    });
  }

  updateData(newData: User | null) {
    this.dataSubject.next(newData);
  }

  cleanup() {
    this.clearSessionCache();
    this.dataSubject.complete();
  }

  getSessionCache() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { user, expiration } = JSON.parse(cached);

    if (new Date().getTime() > expiration) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }

    return user as User;
  };

  clearSessionCache() {
    localStorage.removeItem(CACHE_KEY);
  };

  setSessionCache(user: User) {
    const expiration = new Date().getTime() + SESSION_EXPIRATION_MS;
    localStorage.setItem(CACHE_KEY, JSON.stringify({ user, expiration }));
  };

  isLoggedIn() {
    return this.dataSubject.getValue() !== null;
  }

  async login(username: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      this.setSessionCache(user);
      this.updateData(user);
      this.toastr.success("Login bem-sucedido!");
      this.router.navigate(['']);
    } catch (err) {
      this.toastr.error((err as IError).message);
    }
  }

  async logout() {
    try {
      await signOut(auth);
      this.clearSessionCache();
      this.updateData(null);
      this.toastr.success("Logout realizado com sucesso!");
      this.router.navigate(["login"]);
    } catch (err) {
      this.toastr.error((err as IError).message);
    }
  };
}
