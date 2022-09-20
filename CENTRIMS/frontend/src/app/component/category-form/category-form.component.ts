import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  constructor(
    private questionService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCategory(value: string){
    this.questionService.createCategory(value)
      .subscribe((category: any)=>this.router.navigate(['/category', category._id]))
  }

}
