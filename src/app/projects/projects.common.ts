// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { ProjectsRoutes } from './projects.routes';
import { ProjectsComponent } from './components/projects/projects.component';
import { RequestComponent } from './components/request/request.component';
import { SpotComponent } from './components/spot/spot.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>ProjectsRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    ProjectsComponent,
    RequestComponent,
    SpotComponent
];
