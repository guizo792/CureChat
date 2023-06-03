import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-home',
  templateUrl: './meeting-home.component.html',
  styleUrls: ['./meeting-home.component.css'],
})
export class MeetingHomeComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToRoom = () => {
    this.router.navigate(['/meeting/', uuidv4()]);
  };
}
