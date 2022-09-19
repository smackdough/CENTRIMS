import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Category from 'src/app/models/category';
import Question from 'src/app/models/question';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-questions-view',
  templateUrl: './questions-view.component.html',
  styleUrls: ['./questions-view.component.scss']
})
export class QuestionsViewComponent implements OnInit {
  categories: Category[] = [];
  questions: Question[] = [];

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.questionService.getCategory()
      .subscribe((categories: any) => this.categories = categories);

    this.route.params.subscribe((params: any) => {
      const categoryId = params.categoryId;
      if(!categoryId) return;
      this.questionService.getQuestion(categoryId).subscribe((questions: any) => this.questions = questions);
    });
  }
}
