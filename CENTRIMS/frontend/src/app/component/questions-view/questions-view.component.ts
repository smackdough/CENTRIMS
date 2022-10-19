import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import Category from 'src/app/models/category';
import Question from 'src/app/models/question';
import Domain from 'src/app/models/domain';
import { QuestionsService } from 'src/app/services/questions.service';
import { AuthService } from 'src/app/services/auth.service';

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
<<<<<<< Updated upstream
=======
  domainId: string;
  tempCategoryIdHolder: string;
  user: Object;
>>>>>>> Stashed changes

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    ) { }

  ngOnInit() {
<<<<<<< Updated upstream
    this.questionService.getCategory()
      .subscribe((categories: any) => this.categories = categories);
=======

    this.authService.getProfile().subscribe({
      next: (profile) => {        
        this.user = profile;
      },        
      error: (err) => {
        console.log(err);
        return false;
      }
    })    
  
    this.questionService.getLanguage()
      .subscribe((languages: any) => this.languages = languages);
>>>>>>> Stashed changes

    this.route.params.subscribe((params: any) => {
      this.categoryId = params.categoryId;
      if(!this.categoryId) return;
      this.questionService.getQuestion(this.categoryId).subscribe((questions: any) => this.questions = questions);
      this.questionService.getDomain(this.categoryId).subscribe((domains: any) => this.domains = domains);
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
<<<<<<< Updated upstream
=======

  manageCustomer(){
    this.router.navigate(['/lang/manage-customers'])
  }

  onLogout(){
    this.authService.logout();
    alert("You are now logged out");
    this.router.navigate(['/login']);
    return;
  }

>>>>>>> Stashed changes
}
