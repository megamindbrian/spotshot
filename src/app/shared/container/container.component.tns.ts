import { RadSideDrawerComponent } from "nativescript-pro-ui/sidedrawer/angular";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-pro-ui/sidedrawer";
import { Component, ViewChild, ChangeDetectorRef, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from "../../menu/menu.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    moduleId: module.id,
    selector: 'seed-container',
    styleUrls: ['./container.component.scss'],
    templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit, OnDestroy {

    public menuClass: string;
    titleSub: Subscription;
    public menuTitle: string;
    menuSub: Subscription;
    @ViewChild("drawer") public drawerComponent: RadSideDrawerComponent;

    constructor(public menuService: MenuService, public ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.menuSub = this.menuService.controller.subscribe(isOpen => isOpen
            ? this.drawerComponent.sideDrawer.showDrawer()
            : this.drawerComponent.sideDrawer.closeDrawer());
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
