import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-spot',
    templateUrl: './spot.component.html',
    styleUrls: ['./spot.component.scss']
})
export class SpotComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/projects');
        this.menuService.menuTitle.next('spot.title');
    }

}
