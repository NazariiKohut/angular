import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './components/avatar/avatar.component';
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {TextBlockComponent} from './components/text-block/text-block.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {EducationComponent} from './components/education/education.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {FeeedbacksComponent} from './components/feeedbacks/feeedbacks.component';
import {SkillsComponent} from './components/skills/skills.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogWindowComponent} from './components/dialog-window/dialog-window.component';


@NgModule({
  declarations: [AvatarComponent,
    SideNavComponent,
    TextBlockComponent,
    ExperienceComponent,
    EducationComponent,
    ContactsComponent,
    FeeedbacksComponent,
    SkillsComponent,
    DialogWindowComponent],
  exports: [
    SideNavComponent,
    TextBlockComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    FeeedbacksComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class SharedModule {
}
