import { Component, OnInit, Input } from "@angular/core";
import { Issue } from "src/models/issue";
import { IssuesService } from "../services/issues.service";
import { AppConstants } from "../constants";
import { NgxSpinnerService } from "ngx-spinner";
import { HttpResponse } from "@angular/common/http";
import { ToastrHelper } from '../../helpers/toastr';

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

  @Input("issues") issues: Issue[] = [];
  @Input("error") apiError: boolean = false;
  @Input("loading") isLoading: boolean = false;

  constructor(
    private service: IssuesService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrHelper
  ) {
    this.apiErrorString = AppConstants.APIError;
  }

  handleDelete = (id: number) => this.service.deleteIssue(id);

  toggleCommentView = (id: number) => {
    this.commentView = { ...this.commentView, [id]: !this.commentView[id] };
  };

  ngOnInit(): void {
    this.isLoading = true;
    this.spinner.show();
    this.service.getIssues().subscribe({
      next: (response: HttpResponse<Issue[]>) => {
        if (!response.ok) {
          this.apiError = true;
          throw new Error(this.apiErrorString);
        }
        setTimeout(() => {
          this.issues = response.body!;
          this.apiError = false;
          this.isLoading = false;
          this.spinner.hide();
        }, 3000);
      },
      error: () => {
        !this.apiError
          ? this.toastr.toaster(this.apiErrorString, "error")
          : null;
        this.apiError = false;
        this.isLoading = false;
        this.spinner.hide();
      },
    });
  }
}
