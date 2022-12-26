import { Component, OnInit, Input } from "@angular/core";
import { Issue } from "src/models/issue";
import { IssuesService } from "./issues.service";
import { AppConstants } from "../constants";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  title = "Issue Tracker";
  _service: IssuesService;

  issues: Issue[] = [];
  isLoading: boolean = false;
  isDisabled: boolean = true;
  isDeleted: boolean = false;
  showComment: boolean[] = [];

  @Input() id!: number;
  _apiError: string;

  toggleShowComment = (id: number) => {
    this.showComment[id] = !this.showComment[id];
  };

  constructor(service: IssuesService) {
    this._service = service;
    this._apiError = AppConstants.APIError;
  }

  ngOnInit(): void {
    for (var i = 0; i < this.issues.length; i++) {
      this.showComment[i] = false;
    }

    this.isLoading = true;
    setTimeout(() => {
      this._service.getIssues().subscribe((response) => {
        if (!response.ok) {
          throw new Error(this._apiError);
        }
        const _body = response.body!;
        this.issues = _body;
      });
      this.isLoading = false;
    }, 3000);
  }
}
