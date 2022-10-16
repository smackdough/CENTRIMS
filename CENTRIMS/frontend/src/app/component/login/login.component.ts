import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  loginForm: FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSuccessfulLogin(){    

    if(!this.loginForm.valid){
      console.log("Invalid");
      return;
    }

    
    
    const user = {
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe((data:any) => {
      //console.log(data);
      if(data['success']){
        this.authService.storeUserData(data.token, data.user);
        alert("You are now logged in");
        this.router.navigate(['/lang']);
        this
      } else{
          alert(data['msg']);
          this.router.navigate(['/login']);
      }
    });
  }

  moveToRegister(){
    this.router.navigate(['/register']);
  }

}


