import { Component, OnInit } from '@angular/core';
import Category from 'src/app/models/category';
import Question from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
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

    languageClick(id: any){
      console.log(id);
      this.router.navigateByUrl('/user/id');
    }
<<<<<<< Updated upstream
=======

    categoriesSelected(){
      // console.log(this.categories+ " All categories after selection");
      if(this.selectedCategories.length==0){
        alert("Please select categories to proceed, thank you");
        return
      }

      // this.categories = this.selectedCategories;

      // for(let i=0; i<this.categories.length;i++){
      //   console.log(this.categories[i].title+ " FIRST CATeGORY Name");
      // }

      for(let i=0; i<this.selectedCategories.length; i++){
        for(let j=0; j<this.categories.length; j++){
          if(this.selectedCategories[i]===this.categories[j]._id){
            this.newCategories.push(this.categories[j]);
          }
        }
      }

      this.getQuestion(this.newCategories[this.categoryIndex]._id);

      console.log(this.newCategories+" SECOND CHECK");
      // for(let i=this.selectedCategories.length-1; i>=0; i--){
      //   let keepItem = this.selectedCategories[i];
      //   for (let j = this.categories.length-1; j >= 0; j--) {
      //     console.log(this.categories[j]._id+" Before ENtering loop")
      //     if (this.categories[j]._id != keepItem) {
      //       console.log(keepItem+" Keep Item")
      //       console.log(this.categories[j]._id+" Category ID")
      //       this.categories.splice(j, 1);
      //     }
      //   }
      //   this.selectedCategories.splice(i, 1);
      // }

      // for(let i=0;  i<this.selectedCategories.length; i++){
      //   let keepItem = this.selectedCategories[i];
      //   for (let j=0; j < this.categories.length; j++) {
      //     console.log(this.categories[j]._id+" Before ENtering loop")
      //     if (this.categories[j]._id === keepItem) {
      //       console.log(keepItem+" Keep Item")
      //       console.log(this.categories[j]._id+" Category ID")
      //       break;
      //     }
      //     this.categories.splice(j, 1);
      //   }
      //   this.selectedCategories.splice(i, 1);
      // }

      this.catSelector=true;
      this.hideLanguage=true;
    }

    onCatSelectChange($event: any){
      const id = $event.target.value;
      const isChecked = $event.target.checked;
      if(isChecked){
        this.selectedCategories.push(id);
      }else if(this.selectedCategories.length>0){
        let deleteItem = id;
        for (let i = this.selectedCategories.length-1; i >= 0; i--) {
          if (this.selectedCategories[i] === deleteItem) {
            this.selectedCategories.splice(i, 1);
          }
        }
      }

      console.log(this.selectedCategories);

    }

    onLogout(){
      this.authService.logout();
      alert("You are now logged out");
      this.router.navigate(['/login']);
      return;
    }

>>>>>>> Stashed changes
}
