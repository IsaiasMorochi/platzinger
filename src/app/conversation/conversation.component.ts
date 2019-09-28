import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  friendId: any;
  friend: User;
  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    
    this.friendId = this.activatedRoute.snapshot.params['uid'];
    console.log(this.friendId);
    this.userService.getUserById(this.friendId).valueChanges().subscribe((data: User) => {
      this.friend = data;
    }, (error) => {
      console.log(error);
    });
    
  }

  ngOnInit() {
  }

}
