import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    isLoading: boolean = false;
    showMenu: string = '';
    isAuthenticated: boolean = false;
}