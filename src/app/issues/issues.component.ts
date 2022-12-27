import { Component, OnInit, Input } from "@angular/core";
import { Issue } from "src/models/issue";
import { IssuesService } from "./issues.service";
import { AppConstants } from "../constants";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  title = "Issue Tracker";
  _service: IssuesService;
  _apiError: string;

  issues: Issue[] = [];
  isLoading: boolean = false;
  isDeleted: boolean = false;
  showComment: boolean[] = [];

  @Input() id!: number;

  toggleShowComment = (id: number) => {
    this.showComment[id] = !this.showComment[id];
  };

  constructor(service: IssuesService, private spinner: NgxSpinnerService) {
    this._service = service;
    this._apiError = AppConstants.APIError;
  }

  ngOnInit(): void {
    for (var i = 0; i < this.issues.length; i++) {
      this.showComment[i] = false;
    }

    this.isLoading = true;
    this.spinner.show();
    setTimeout(() => {
      this._service.getIssues().subscribe((response) => {
        if (!response.ok) {
          throw new Error(this._apiError);
        }
        const _body = response.body!;
        this.issues = _body;
      });
      this.isLoading = false;
      this.spinner.hide();
    }, 3000);
  }
}
