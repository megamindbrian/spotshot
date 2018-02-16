import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// vendor dependencies
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// app
import { Config } from './common/index';
import { AppComponent } from './app.component';
import { SHARED_MODULES, COMPONENT_DECLARATIONS, COMPONENT_EXPORTS } from './app.common';
import { ContainerComponent } from './shared/container/container.component';
import { MenuService } from './menu/menu.service';

Config.PLATFORM_TARGET = Config.PLATFORMS.WEB;

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(<any>http, './assets/i18n/', '.json');
}


@NgModule({
    declarations: [ 
        ...COMPONENT_DECLARATIONS
    ],
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpLoaderFactory),
                deps: [HttpClient]
            }
        }),
        ...SHARED_MODULES
    ],
    providers: [
        MenuService
    ],
    bootstrap: [
        ...COMPONENT_EXPORTS
    ]
})
export class AppModule {}
