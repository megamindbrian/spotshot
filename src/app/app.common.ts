import { AppRoutingModule } from './app-routing.module';
// demo
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './shared/container/container.component';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    HomeModule,
    MenuModule,
];

export const COMPONENT_DECLARATIONS: any[] = [
    AppComponent,
    ContainerComponent
];

export const COMPONENT_EXPORTS: any[] = [
    AppComponent
];

export * from './app-routing.module';