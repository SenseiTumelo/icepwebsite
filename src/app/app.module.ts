import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';


// added
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quote/quote.component';
import { AdPostsComponent } from './ad-posts/ad-posts.component';
import { TeamComponent } from './team/team.component';
import { AdServicesComponent } from './ad-services/ad-services.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ApplicationPageComponent } from './application-page/application-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { EmailFeedbackComponent } from './email-feedback/email-feedback.component';
import { from } from 'rxjs';
import { ApiService } from './api.service';
import { RegstudComponent } from './dashboard/regstud/regstud.component';
import { AdminprofComponent } from './dashboard/adminprof/adminprof.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    QuoteComponent,
    AdPostsComponent,
    TeamComponent,
    AdServicesComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ContactsPageComponent,
    ProjectsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ApplicationPageComponent,
    DashboardComponent,
    GalleryComponent,
    AdminLoginPageComponent,
    EmailFeedbackComponent,
    RegstudComponent,
    AdminprofComponent,
     ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SidebarModule.forRoot()
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
