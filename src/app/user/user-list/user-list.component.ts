import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
    users: any[] = [];

    constructor(private userService:HttpService){}

    ngOnInit(): void {
      this.userService.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users.sort());
      });
    }

}
