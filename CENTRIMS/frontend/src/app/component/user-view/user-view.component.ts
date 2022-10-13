import { Component, OnInit } from '@angular/core';
import Language from 'src/app/models/language';
import Category from 'src/app/models/category';
import Question from 'src/app/models/question';
import Customer from 'src/app/models/customer';
import Responses from 'src/app/models/responses';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  languages: Language[] = [];
  currentLanguage: string;  
  categories: Category[] = [];
  questions: Question[] = [];
  languageId: string;
  categoryId: string;
//   languageIndex: number=0;
  categoryIndex: number=0;
  questionIndex: number=0;
  nextButtonCheck: boolean=false;
  userResponse: any;
  responseArray: any=[];

  customers: Customer[] = [];
  currentCustomer: string;
  customerId: string;

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.questionService.getCustomer()
      .subscribe((customers: any) => this.customers = customers);

    this.questionService.getLanguage()
      .subscribe((languages: any) => {
        this.languages = languages;
      });

    // this.languageId = this.languages[0]._id;

    this.route.params.subscribe((params: any) => { 
        this.languageId = params.languageId;

        this.customerId = params.customerId;
        if(!this.customerId) return;
      
        if(this.customerId){
            this.questionService.getOneCustomerTitle(this.customerId)
            .subscribe((currentcustomer: any) => {
                this.currentCustomer = currentcustomer.title;
            });
        }

        // if(!this.languageId){
        //     setTimeout(()=>{ alert("Please select language to proceed, thank you!") }, 2000)
            
        // }
    
        if(this.languageId){
            this.questionService.getOneLanguageTitle(this.languageId)
            .subscribe((currentLanguage: any) => {
                this.currentLanguage = currentLanguage.title;
        })};

        this.questionService.getCategory(this.languageId)
            .subscribe((categories: any) =>{ this.categories = categories
            this.getQuestion(this.categories[this.categoryIndex]._id)
        });
    });

  };

    // getCategory(languageId: string){
    //     console.log(languageId);
    //     this.languageId = languageId;
    //     if(!this.languageId) return;
    //     this.questionService.getCategory(this.languageId).subscribe((categories: any) => {this.categories = categories
    //     console.log(categories);
    //     });
    // };
    
    getQuestion(categoryId: string){
      console.log(categoryId);
      this.categoryId = categoryId;
      if(!this.categoryId) return;
      this.questionService.getQuestionByCat(this.categoryId).subscribe((questions: any) => {this.questions = questions
    //   console.log(questions)
    //   if(questions.length==0){
    //     alert("No questions available for selected category, please contact supervisor, thank you")
    //   };
      });

    };

    nextQuestion(){
      let x = this.questions.length-1;
      if(x==this.questionIndex){
        this.questions = [];
        this.questionIndex = 0;
        if(this.categories[this.categoryIndex+1]){
          this.getQuestion(this.categories[this.categoryIndex+1]._id);
          this.categoryIndex = this.categoryIndex+1;
        }
        
      }else{
        this.questionIndex = this.questionIndex+1;
      }
      this.nextButtonCheck = false;
      this.userResponse=null;
    }

    checkSubmissions(){
      let x = this.questions.length-1;
      let y = this.categories.length-1;
      if(x==this.questionIndex && y==this.categoryIndex){
        return true;
      }
      return false;
    }

    submitAnswer(event: any){
    
      let tempVar: any = this.questions[this.questionIndex]._domainId;
      let domainTitle: string;
      (this.questionService.getOneDomain(tempVar).subscribe((c:any)=>{
        domainTitle=c.title
        this.responseArray.push({
            "customerId":this.customerId,
            "category":this.categories[this.categoryIndex].title, 
            "categoryId": this.categoryId,
            "domain":domainTitle,
            "domainId": tempVar,
            "question":this.questions[this.questionIndex].title,
            "response":event
          });
        
        this.questionService.createResponse(this.customerId, this.categories[this.categoryIndex].title, this.categoryId, domainTitle, tempVar, this.questions[this.questionIndex].title, event)
      }));
        
      this.nextButtonCheck = true;

    }

    sendResponses(){
      console.log(this.responseArray);
    }


}
