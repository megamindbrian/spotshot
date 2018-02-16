// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { InboxRoutes } from './inbox.routes';
import { InboxComponent } from './components/inbox/inbox.component';
import { MessagesComponent } from './components/messages/messages.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>InboxRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
    InboxComponent,
    MessagesComponent
];
