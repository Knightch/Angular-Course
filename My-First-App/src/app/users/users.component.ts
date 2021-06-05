import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
    { id: 1, name: 'Abhinash' },
    { id: 2, name: 'Adil' },
    { id: 3, name: 'Anupriya' },
    { id: 4, name: 'Srija' },
    { id: 5, name: 'Gaurav' },
    { id: 6, name: 'Deepak' },
    { id: 7, name: 'Manohar' },
    { id: 8, name: 'Sonali' }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
