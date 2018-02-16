import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('#menu');
        this.menuService.menuTitle.next('projects.title');
    }

}
