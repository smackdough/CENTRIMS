import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { DomainFormComponent } from './component/domain-form/domain-form.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';
import { LoginComponent } from './component/login/login.component';
import { UserViewComponent } from './component/user-view/user-view.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { CustomerViewComponent } from './component/customer-view/customer-view.component';
import { RegisterComponent } from './component/register/register.component';
import { ValidateService } from './services/validate.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { CanActivate } from '@angular/router';
import { LanguageFormComponent } from './component/language-form/language-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'register', component: RegisterComponent},
  { path: 'lang', component: QuestionsViewComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/language-form', component: LanguageFormComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/customer-form', component: CustomerFormComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/customers', component: CustomerViewComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/customers/:customerId', component: CustomerViewComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/:languageId', component: QuestionsViewComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/:languageId/category/:categoryId', component: QuestionsViewComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/:languageId/category/:categoryId/domains/:domainId', component: QuestionsViewComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/:languageId/category-form', component: CategoryFormComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/:languageId/category/:categoryId/domains/:domainId/question-form', component: QuestionFormComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'lang/:languageId/category/:categoryId/domain-form', component: DomainFormComponent, canActivate:[AuthGuard, AdminGuard]},
  { path: 'user', component: UserViewComponent, canActivate:[AuthGuard]},
  { path: 'user/:customerId', component: UserViewComponent, canActivate:[AuthGuard]},
  { path: 'user/:customerId/:languageId', component: UserViewComponent, canActivate:[AuthGuard]}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
