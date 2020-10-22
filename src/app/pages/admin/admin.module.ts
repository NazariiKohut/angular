import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { AdminAuthComponent } from './components/admin-auth/admin-auth.component';



@NgModule({
  declarations: [AdminComponent, AdminAuthComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
