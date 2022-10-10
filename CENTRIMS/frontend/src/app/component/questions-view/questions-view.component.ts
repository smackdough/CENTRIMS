import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import Category from 'src/app/models/category';
import Question from 'src/app/models/question';
import Domain from 'src/app/models/domain';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-view',
  templateUrl: './questions-view.component.html',
  styleUrls: ['./questions-view.component.scss']
})
export class QuestionsViewComponent implements OnInit {
  categories: Category[] = [];
  questions: Question[] = [];
  domains: Domain[] = [];
  categoryId: string;
  domainId: string;
  tempCategoryIdHolder: string;

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.questionService.getCategory()
      .subscribe((categories: any) => this.categories = categories);
    this.route.params.subscribe((params: any) => {
      
      if (window.location.href.indexOf('category') > 0) {
        this.categoryId = params.categoryId;
      }else if(window.location.href.indexOf('domain') > 0) {
        this.domainId = params.categoryId;
      }
      console.log(this.tempCategoryIdHolder+" Temp Cat Holder BEFORE");
      if(!this.categoryId && !this.domainId) return;
      console.log(this.categoryId+" Category Id");
      console.log(this.domainId+" DOmain Id")
      if(!this.domainId && !this.tempCategoryIdHolder){
        console.log('inside');
        this.tempCategoryIdHolder = this.categoryId;
      }
      this.questionService.getQuestion(this.domainId).subscribe((questions: any) => this.questions = questions);
      console.log(this.tempCategoryIdHolder+" Temp Cat Holder AFTER");
      this.questionService.getDomain(this.tempCategoryIdHolder).subscribe((domains: any) => this.domains = domains);
    });
  }

  deleteDomain(domain: Domain) {this.questionService.deleteDomain(domain._id).subscribe((domain: any) => this.domains = this.domains.filter(d => d._id != domain._id))};
  deleteQuestion(question: Question) { this.questionService.deleteQuestion(question._id).subscribe((question: any)=> this.questions = this.questions.filter(q => q._id != question._id)) };
  deleteCategory(category: Category) {
    this.questionService.deleteCategory(category._id).subscribe(()=> this.categories = this.categories.filter(c => c._id != category._id));
    alert("Are you sure you want to delete this category?");
    window.location.reload(); 
  };
  addNewQuestion(){
    if(!this.categoryId){
      alert("Please select a category to add a question");
      return;
    }
    this.router.navigate(['./question-form'], {relativeTo: this.route });
  }

  addNewDomain(){
    if(!this.categoryId){
      alert("Please select a category to add a domain");
      return;
    }
    this.router.navigate(['./domain-form'], {relativeTo: this.route});
  }

  languageClick(id: any){
    console.log(id);
    this.router.navigateByUrl('/user/id');
  }
}
