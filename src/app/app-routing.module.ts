import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RemainderComponent } from './remainder/remainder.component';
import { ShowEventComponent } from './show-event/show-event.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'createEvent',component:CreateEventComponent
  },
  {
    path:'showEvent',component:ShowEventComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'remainder',component:RemainderComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
