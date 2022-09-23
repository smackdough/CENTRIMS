import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  categoryId: string;

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute) { 
      this.route.params.subscribe((params: any)=> this.categoryId = params.categoryId);
    }

  ngOnInit(): void {
  }

  addQuestion(value: string){
    this.questionService.createQuestion(this.categoryId, value)
      .subscribe(()=>this.router.navigate(['../'], {relativeTo: this.route}));
  }

}