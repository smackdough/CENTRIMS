import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private webService: WebService) { }

  getCategory(){
    return this.webService.get('category')
  }

  createCategory(title: string){
    return this.webService.post("category", {title});
  }

  deleteCategory(categoryId: string){
    return this.webService.delete(`category/${categoryId}`);
  } 

  getQuestion(categoryId: string){
    return this.webService.get(`category/${categoryId}/questions`);
  }

  createQuestion(categoryId: string, title: string){
    return this.webService.post(`category/${categoryId}/questions`, {title});
  }

  deleteQuestion(questionId: string){
    return this.webService.delete(`questions/${questionId}/`);
  } 
}
