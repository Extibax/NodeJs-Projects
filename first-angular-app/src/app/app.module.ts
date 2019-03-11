import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UsersComponent } from './users/users.component';

import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UsersComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }