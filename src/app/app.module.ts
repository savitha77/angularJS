import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';


const appRoutes: Routes = [
  {path:'list', component:UserlistComponent},
  {path: 'user-registration', component: UserComponent }
 
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
