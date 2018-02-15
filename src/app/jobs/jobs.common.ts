// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { JobsRoutes } from './jobs.routes';
import { JobsComponent } from './components/jobs/jobs.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>JobsRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    JobsComponent
];
