import { Component, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'seed-container',
    styleUrls: ['./container.component.scss'],
    templateUrl: './container.component.html',
})
export class ContainerComponent {

    public menuClass: string;
    public menuTitle: string;
    titleSub: Subscription;
    public menuOpen: boolean;
    menuSub: Subscription;
    constructor(public menuService: MenuService, public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.menuSub = this.menuService.controller.subscribe(isOpen => {
            this.menuOpen = isOpen;
            this.ref.detectChanges();
        });
        this.titleSub = this.menuService.menuTitle.subscribe(t => {
            this.menuTitle = t;
            this.menuClass = t.replace(/[^a-z]/ig, '_');
            this.ref.detectChanges();
        });
    }

    ngOnDestroy() {
        if(typeof this.menuSub !== 'undefined') {
            this.menuSub.unsubscribe();
        }
        if(typeof this.titleSub !== 'undefined') {
            this.titleSub.unsubscribe();
        }
    }
}
