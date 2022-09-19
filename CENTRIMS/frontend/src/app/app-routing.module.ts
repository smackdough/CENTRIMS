import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';

const routes: Routes = [
  { path: '', component: QuestionsViewComponent },
  { path: 'category/:categoryId', component: QuestionsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
