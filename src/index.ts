import { CommonModule } from '@angular/common';
import { RepoNameComponent } from './repo-name.component';
import { NgModule } from '@angular/core';

export * from './repo-name.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        RepoNameComponent,
    ],
    exports: [
        RepoNameComponent,
    ],
    entryComponents: [
        RepoNameComponent,
    ]
})
export class RepoNameModule {

}
