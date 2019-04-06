import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: '', redirectTo: '/crisis-center', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot(routes 
     , { enableTracing: true }) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
