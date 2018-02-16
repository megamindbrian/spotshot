import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { SHARED_MODULES, COMPONENT_DECLARATIONS } from './projects.common';

export const MAPS_CONFIG = {
    apiKey: 'AIzaSyB6-7CChLh6uU8YqPqpbrXemF4w2blXGf4',
    libraries: [ 'places' ]
};

@NgModule({
    imports: [
        AgmCoreModule.forRoot(MAPS_CONFIG),
        ...SHARED_MODULES,
    ],
    declarations: [
        ...COMPONENT_DECLARATIONS
    ],
})
export class ProjectsModule { }
