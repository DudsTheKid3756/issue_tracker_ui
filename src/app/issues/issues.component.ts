import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Issue } from "src/models/issue";
import { IssuesService } from "../services/issues.service";
import { AppConstants } from "../constants";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  title = "Issue Tracker";

  apiErrorString: string;
  apiPath: any;
  commentView: { [id: number]: boolean } = {};

  values: any;

  public issues: Issue[] = [];
  public apiError: boolean = true;
  public isLoading: boolean = false;

  constructor(
    private service: IssuesService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.service
      .getComponentIssues()
      .subscribe((value) => (this.issues = value));
    this.service
      .getComponentApiError()
      .subscribe((value) => (this.apiError = value));
    this.service
      .getComponentIsLoading()
      .subscribe((value) => (this.isLoading = value));

    this.apiErrorString = AppConstants.APIError;
  }

  handleDelete = (id: number) => this.service.deleteIssue(id);

  handleToCreate = () => this.router.navigate(["/", "create"]);

  handleToEdit = (id: number) => this.router.navigate(["/", "update", `${id}`]);

  toggleCommentView = (id: number) => {
    this.commentView = { ...this.commentView, [id]: !this.commentView[id] };
  };

  ngOnInit(): void {
    this.isLoading = true;
    this.spinner.show();
    this.service.getIssues();
  }
}
