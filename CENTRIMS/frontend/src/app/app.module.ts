import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { UserViewComponent } from './component/user-view/user-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { CustomerViewComponent } from './component/customer-view/customer-view.component';
import { RegisterComponent } from './component/register/register.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { LanguageFormComponent } from './component/language-form/language-form.component';
//import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsViewComponent,
    CategoryFormComponent,
    QuestionFormComponent,
    LoginComponent,
    UserViewComponent,
    CustomerFormComponent,
    CustomerViewComponent,
    RegisterComponent,
    LanguageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
    NgbModule,
    RouterModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})       
  ],
  providers: [ValidateService, AuthService, AuthGuard, AdminGuard],
    NgbModule,
    RouterModule       
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
