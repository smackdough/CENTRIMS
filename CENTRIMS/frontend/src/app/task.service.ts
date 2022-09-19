import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebService) { }

  getCategory() {
    return this.webService.get('categories');
  }

  createCategory(title:string){
    return this.webService.post('categories', {title});
  }

  getQuestion(categoryId: string) {
    return this.webService.get(`categories/${categoryId}/questions`); 
  }

  createQuestion(categoryId:string, title:string) {
    return this.webService.post(`categories/${categoryId}/questions`, {title});
  }

  deleteCategory(categoryId:string ){
    return this.webService.delete(`categories/${categoryId}`);
  }

  deleteQuestion(categoryId:string, questionId:string){
    return this.webService.delete(`categories/${categoryId}/questions/${questionId}`);
  }  
}
