import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  username:string;
  

  constructor(private userService : UserService) { }

  findUser (){
    this.userService.updateUser(this.username);

  }

  ngOnInit() {
  }

}
