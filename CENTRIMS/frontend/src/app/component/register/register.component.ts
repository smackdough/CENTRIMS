import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { QuestionsService } from 'src/app/services/questions.service';
//import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  fname: string;
  lname: string;
  username: string;
  password: string;

  registerForm: FormGroup = new FormGroup({
    fnameCheck: new FormControl(null, [Validators.required]),
    lnameCheck: new FormControl(null, [Validators.required]),
    emailCheck:new FormControl(null, [Validators.email, Validators.required]),
    passwordCheck: new FormControl(null, [Validators.required]),
    cpasswordCheck: new FormControl(null, [Validators.required])
  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
    //private flashmessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    
  }

  register(){    
    if(!this.registerForm.valid){
        console.log("Invalid");
        //alert("Passwords do not match!");
        return;
    }
    else if(this.registerForm.controls['passwordCheck'].value != this.registerForm.controls['cpasswordCheck'].value){
        console.log("Invalid");
        alert("Passwords do not match!");
        return;
    }

    const user = {
      
      fname: this.fname,
      lname: this.lname,
      username: this.username,
      password: this.password
      //cpassword: this.registerForm.controls['cpassword']
    }

    //register user
    this.authService.registerUser(user).subscribe((data:any) => {
      if(data['success']){
        //this.flashmessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout:3200});
        alert('You are now registered and can log in');
        this.router.navigate(['login']);
        //console.log(user);
      } else{
        alert('Registration failed');
        this.router.navigate(['register']);

      }
    });

  }

  moveToLogin(){
    this.router.navigate(['/login']);
  }

}
