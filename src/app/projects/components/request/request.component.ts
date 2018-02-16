import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../../menu/menu.service';

@Component({
    moduleId: module.id,
    selector: 'seed-request',
    templateUrl: './request.component.html',
    styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
    @Input() zoom: number = 4;
    @Input() lat: number = 51.678418;
    @Input() lng: number = 7.809007;

    constructor(public menuService: MenuService) { }

    ngOnInit() {
        this.menuService.button.next('/projects');
        this.menuService.menuTitle.next('request.title');
    }

}
