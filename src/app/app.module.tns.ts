import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
// nativescript
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { SHARED_MODULES, COMPONENT_EXPORTS, COMPONENT_DECLARATIONS } from './app.common';
import { MenuService } from './menu/menu.service';

Config.PLATFORM_TARGET = Config.PLATFORMS.MOBILE_NATIVE;

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(<any>http, '/assets/i18n/', '.json');
}

@NgModule({
    bootstrap: [
        ...COMPONENT_EXPORTS
    ],
    imports: [
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
        ...SHARED_MODULES,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
    providers: [
        MenuService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
