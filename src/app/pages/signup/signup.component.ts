import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import{UserService} from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private UserService:UserService, private snack:MatSnackBar ) { }

  public user ={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void {}

  formSubmit(){
    console.log(this.user);
    if(this.user.username =='' || this.user.username == null){
      this.snack.open('username name is required','',{
        duration:3000,
      }
      );
    }

    //addUser:from userService

    this.UserService.addUser(this.user).subscribe(
      (data) => {
        //success
        console.log(data);
        Swal.fire('Success',"User Successfully Registered!!","success");
        
      },
      (error)=>{

        console.log(error);
        this.snack.open('Something Went Wrong!!','',{
          duration:3000,
        }
        );


      }
    )
  }

}
