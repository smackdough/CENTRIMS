import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { DomainFormComponent } from './component/domain-form/domain-form.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';
import { LoginComponent } from './component/login/login.component';
// import { UserViewComponent } from './component/user-view/user-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'lang', component: QuestionsViewComponent },
  { path: 'lang/:languageId', component: QuestionsViewComponent },
  { path: 'lang/:languageId/category/:categoryId', component: QuestionsViewComponent },
  { path: 'lang/:languageId/category/:categoryId/domains/:domainId', component: QuestionsViewComponent },
  { path: 'lang/:languageId/category-form', component: CategoryFormComponent },
  { path: 'lang/:languageId/category/:categoryId/domains/:domainId/question-form', component: QuestionFormComponent },
  { path: 'lang/:languageId/category/:categoryId/domain-form', component: DomainFormComponent},
  // { path: 'user/en', component: UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
