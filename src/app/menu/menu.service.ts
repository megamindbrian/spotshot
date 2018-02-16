import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MenuItem } from './menu.common';

@Injectable()
export class MenuService {
    public controller = new BehaviorSubject<boolean>(false);
    public menuOpen = false;
    public menuTitle = new BehaviorSubject<string>("home.title");
    public button = new BehaviorSubject<string>("#menu");

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.projects',
            link: ['/projects']
        },
        {
            title: 'menu.inbox',
            link: ['/inbox']
        },
        {
            title: 'menu.payouts',
            link: ['/payouts']
        },
        {
            title: 'menu.account',
            link: ['/account']
        }
    ];

    constructor() {
        this.controller.subscribe(isOpen => this.menuOpen = isOpen)
    }
}