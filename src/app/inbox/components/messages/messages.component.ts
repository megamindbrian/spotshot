import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/inbox');
        this.menuService.menuTitle.next('messages.title');
    }

}
