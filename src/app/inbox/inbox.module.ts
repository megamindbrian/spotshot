import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './inbox.common';

@NgModule({
    imports: [
        ...SHARED_MODULES,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
})
export class InboxModule { }
