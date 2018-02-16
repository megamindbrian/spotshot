import { Routes } from '@angular/router';
// app
import { HomeComponent } from './components/home/home.component';

export const HomeRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'projects',
        loadChildren: './app/projects/projects.module#ProjectsModule'
    },
    {
        path: 'inbox',
        loadChildren: './app/inbox/inbox.module#InboxModule'
    }
];
