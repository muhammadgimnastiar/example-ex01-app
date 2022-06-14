import { Component, OnInit } from '@angular/core';

import { Friend } from './friend.model';
import { FriendsService } from './friends.service';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
  providers: [FriendsService]
})
export class FriendComponent implements OnInit {

  friendList : Friend [] = [];
    

  constructor(private friendService: FriendsService) { }

  ngOnInit() {
    this.friendList = this.friendService.getFriends();
    this.friendService.friendAdded.subscribe(() =>{
      this.friendList = this.friendService.getFriends();
    })
  }

  onFriendAdded (newFriendInfo: Friend){
    console.log(newFriendInfo);
    this.friendList.push(newFriendInfo);
    console.log(this.friendList);
  }

}
