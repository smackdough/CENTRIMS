import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private webService: WebService) { }

  getLanguage(){
    return this.webService.get('language')
  }

  getOneLanguageTitle(languageId: string){
    return this.webService.get(`language/${languageId}`)
  }

  // getCategory(){
  //   return this.webService.get('category')
  // }

  getCategory(languageId: string){
    return this.webService.get(`${languageId}/category`)
  }

  createCategory(languageId: string, title: string){
    return this.webService.post(`${languageId}/category`, {title});
  }

  deleteCategory(categoryId: string){
    return this.webService.delete(`category/${categoryId}`);
  } 

  getQuestion(domainId: string){
    return this.webService.get(`domains/${domainId}/questions`);
  }

  getQuestionByCat(categoryId: string){
    return this.webService.get(`category/${categoryId}/questions`);
  }

  createQuestion(categoryId: string, domainId: string, title: string){
    return this.webService.post(`category/${categoryId}/domains/${domainId}/questions`, {title});
  }

  deleteQuestion(questionId: string){
    return this.webService.delete(`questions/${questionId}/`);
  } 

  getDomain(categoryId: string){
    return this.webService.get(`category/${categoryId}/domains`);
  }

  getOneDomain(domainId: string){
    return this.webService.get(`domains/${domainId}`);
  }

  createDomain(categoryId: string, title: string){
    return this.webService.post(`category/${categoryId}/domains`, {title});
  }

  deleteDomain(domainId: string){
    return this.webService.delete(`domains/${domainId}/`);
  } 

  createCustomer(title: string){
    return this.webService.post(`customer`, {title});
  }

  getCustomer(){
    return this.webService.get('customer')
  }

  getOneCustomerTitle(customerId: string){
    return this.webService.get(`customer/${customerId}`)
  }

  createResponse(customerId: string, categoryName: string, _categoryId: string, domainName: string, _domainId: string, question: string, response: string){
    return this.webService.post(`add-response/${customerId}`, {categoryName, _categoryId, domainName, _domainId, question, response});
  }

  getResponsesOfCustomer(customerId: string){
    return this.webService.get(`response/${customerId}/responses`);
  }

}
