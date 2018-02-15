import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MenuItem } from './menu.common';

@Injectable()
export class MenuService {
    public controller = new BehaviorSubject<boolean>(false);
    public menuOpen = false;
    public menuTitle = new BehaviorSubject<string>("home.title");

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.jobs',
            link: ['/jobs']
        }
    ];

    constructor() {
        this.controller.subscribe(isOpen => this.menuOpen = isOpen)
    }
}