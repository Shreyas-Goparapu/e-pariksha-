import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotesComponent } from './pages/notes/notes.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';

const routes: Routes = [{ path: '', component: HomeComponent, pathMatch: 'full' }, 
{ path: 'register', component: RegisterComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' }, 
{ path: 'contacts', component: ContactComponent, pathMatch: 'full' },
{ path: 'notes', component: NotesComponent, pathMatch: 'full' }, 
{ 
  path: 'admin', 
  component: AdminDashboardComponent, 
  children:[
    {
      path:'',
      component: WelcomeComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'categories',
      component: ViewCategoriesComponent
    }

]
},
{ path: 'user-dashboard', component: UserDashboardComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
