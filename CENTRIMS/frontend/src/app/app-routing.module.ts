import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { DomainFormComponent } from './component/domain-form/domain-form.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';
// import { UserViewComponent } from './component/user-view/user-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: QuestionsViewComponent },
  { path: 'category/:categoryId', component: QuestionsViewComponent },
  { path: 'category/:categoryId/domains/:domainId', component: QuestionsViewComponent },
  { path: 'category-form', component: CategoryFormComponent },
  { path: 'category/:categoryId/question-form', component: QuestionFormComponent },
  { path: 'category/:categoryId/domain-form', component: DomainFormComponent},
  // { path: 'user/en', component: UserViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
