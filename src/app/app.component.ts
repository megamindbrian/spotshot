import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from './menu/menu.service';
// app

@Component({
    moduleId: module.id,
    selector: 'maestro-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    constructor(translate: TranslateService, public menuService: MenuService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}
