import { Routes } from '@angular/router';
// app
import { InboxComponent } from './components/inbox/inbox.component';
import { MessagesComponent } from './components/messages/messages.component';

export const InboxRoutes: Routes = [
    {
        path: '',
        component: InboxComponent
    },
    {
        path: ':sender',
        component: MessagesComponent
    },
];
