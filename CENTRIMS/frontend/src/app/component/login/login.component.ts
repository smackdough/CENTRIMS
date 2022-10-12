import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSuccessfulLogin(){

    if(!this.loginForm.valid){
      console.log("Invalid");
      return;
    }

    console.log(JSON.stringify(this.loginForm.value));
    this.router.navigate(['/lang']);
  }

}
