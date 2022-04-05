import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Roles, User } from "../../models";

const USERS: User[] = [
  {
    id: 1,
    username: 'maria',
    password: '123',
    role: Roles.admin,
  },
  {
    id: 1,
    username: 'maria',
    password: '123',
    role: Roles.admin,
  }
];

@Injectable()
export class AuthService {
	private redirectUrl: string = '/';
	private loginUrl: string = '/login';
	private isloggedIn: boolean = false;
	private loggedInUser = {} as User;

	users$$ = new BehaviorSubject(USERS);

	getAllUsers(): Observable<User[]> {
		return this.users$$.asObservable();
	}

	isUserAuthenticated(username: string, password: string): Observable<boolean> {
		return this.getAllUsers().pipe(
			map(users => {
				let user = users.find(user => (user.username === username) && (user.password === password));
				if (user) {
					this.isloggedIn = true;
					this.loggedInUser = user;
				} else {
					this.isloggedIn = false;
				}

				return this.isloggedIn;
			}));
	}
	isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}

	getRedirectUrl(): string {
		return this.redirectUrl;
	}

	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}

	getLoginUrl(): string {
		return this.loginUrl;
	}

	getLoggedInUser(): User {
		return this.loggedInUser;
	}

	logoutUser(): void {
		this.isloggedIn = false;
	}
}
