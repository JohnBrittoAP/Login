import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{

  hide:boolean;
  username;
  password;
  role;
  Rolearray=['Admin','Supervisor','Agent'];
  user: FormControl;
  
  constructor(private router: Router,
              private authservice: AuthService 
              ){}

  ngOnInit()
  {
    this.user = new FormControl('', [Validators.required]);
  }

  onSubmit() 
  {
    let body = 'uname='+this.username+'&pass='+this. password+'&role='+this.role;
    this.authservice.login(body)
   .subscribe(
    data =>{
     // alert(data);
      if(data != null)
       {
         localStorage.setItem('currentUser',data );
         //alert(data);
         this.router.navigate(['/','home']); //navigating to next page after authentication
       }
       else
       {
          alert("Username or Password incorrect");
          this.router.navigate(['/','login']);         
       }
      }); 
  }
  
 }
