import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatSidenavModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

export const MATERIALS = [
    MatCheckboxModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule
]

@NgModule({
    imports: [ CommonModule ],
    declarations: [],
    exports: [
        CommonModule,
        FormsModule,
        ...MATERIALS
    ]
})
export class SharedModule { };
