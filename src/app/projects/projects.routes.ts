import { Routes } from '@angular/router';
// app
import { ProjectsComponent } from './components/projects/projects.component';
import { RequestComponent } from './components/request/request.component';
import { SpotComponent } from './components/spot/spot.component';

export const ProjectsRoutes: Routes = [
    {
        path: '',
        component: ProjectsComponent
    },
    {
        path: 'request',
        component: RequestComponent
    },
    {
        path: ':spot',
        component: SpotComponent
    }
];
