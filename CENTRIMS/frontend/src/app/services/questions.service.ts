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

  getQuestion(categoryId: string, domainId: string){
    return this.webService.get(`category/${categoryId}/domains/${domainId}/questions`);
  }

  createQuestion(categoryId: string, title: string){
    return this.webService.post(`category/${categoryId}/questions`, {title});
  }

  deleteQuestion(questionId: string){
    return this.webService.delete(`questions/${questionId}/`);
  } 

  getDomain(categoryId: string){
    return this.webService.get(`category/${categoryId}/domains`);
  }

  createDomain(categoryId: string, title: string){
    return this.webService.post(`category/${categoryId}/domains`, {title});
  }

  deleteDomain(domainId: string){
    return this.webService.delete(`domains/${domainId}/`);
  } 
}
