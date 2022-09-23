import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/category';
import Question from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {

  categories: Category[] = [];
  questions: Question[] = [];
  categoryId: string;
  categoryIndex: number=0;
  questionIndex: number=0;
  nextButtonCheck: boolean=false;
  userResponse: any;
  responseArray: any=[];

  constructor(
    private questionService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.questionService.getCategory()
      .subscribe((categories: any) =>{ this.categories = categories
      this.getQuestion(this.categories[this.categoryIndex]._id)
      });
    };

    getQuestion(categoryId: string){
      console.log(categoryId);
      this.categoryId = categoryId;
      if(!this.categoryId) return;
      this.questionService.getQuestion(this.categoryId).subscribe((questions: any) => {this.questions = questions
      console.log(questions);
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
      this.responseArray.push({
        "category":this.categories[this.categoryIndex].title, 
        "question":this.questions[this.questionIndex].title,
        "response":event
      });
      this.nextButtonCheck = true;

    }

    sendResponses(){
      console.log(this.responseArray);
    }
}
