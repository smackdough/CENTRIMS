import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: 'category', component: QuestionsViewComponent },
  { path: 'category/:categoryId', component: QuestionsViewComponent },
  { path: 'category-form', component: CategoryFormComponent },
  { path: 'category/:categoryId/question-form', component: QuestionFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
