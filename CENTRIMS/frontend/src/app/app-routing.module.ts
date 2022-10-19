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
import { LanguageFormComponent } from './component/language-form/language-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'lang', component: QuestionsViewComponent },
  { path: 'lang/language-form', component: LanguageFormComponent},
  { path: 'lang/customer-form', component: CustomerFormComponent},
  { path: 'lang/customers', component: CustomerViewComponent},
  { path: 'lang/customers/:customerId', component: CustomerViewComponent},
  { path: 'lang/:languageId', component: QuestionsViewComponent },
  { path: 'lang/:languageId/category/:categoryId', component: QuestionsViewComponent },
  { path: 'lang/:languageId/category/:categoryId/domains/:domainId', component: QuestionsViewComponent },
  { path: 'lang/:languageId/category-form', component: CategoryFormComponent },
  { path: 'lang/:languageId/category/:categoryId/domains/:domainId/question-form', component: QuestionFormComponent },
  { path: 'lang/:languageId/category/:categoryId/domain-form', component: DomainFormComponent},
  { path: 'user', component: UserViewComponent},
  { path: 'user/:customerId', component: UserViewComponent},
  { path: 'user/:customerId/:languageId', component: UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
