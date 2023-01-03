import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Issue } from '../../models/issue';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent {
  issue!: Issue;

  constructor(private router: Router) {}

  handleCancel = () => this.router.navigate(["/"]);
}
