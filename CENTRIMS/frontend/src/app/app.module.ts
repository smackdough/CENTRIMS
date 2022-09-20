import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsViewComponent } from './component/questions-view/questions-view.component';
import { CategoryFormComponent } from './component/category-form/category-form.component';
import { QuestionFormComponent } from './component/question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsViewComponent,
    CategoryFormComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
