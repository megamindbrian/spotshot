import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('#menu');
        this.menuService.menuTitle.next('inbox.title');
    }

}
