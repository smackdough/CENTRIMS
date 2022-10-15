import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  constructor(
    private questionService: QuestionsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  addCustomer(value: string){
    this.questionService.createCustomer(value)
      .subscribe((customer: any)=>{
      window.location.reload();
      alert("Customer Added Successfully")})
  }

  // this.router.navigate(['/lang']);

}
