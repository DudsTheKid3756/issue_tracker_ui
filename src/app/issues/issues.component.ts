import { Component, OnInit, Input } from "@angular/core";
import { Issue } from "src/models/issue";
import { IssuesService } from "./issues.service";
import { AppConstants } from "../constants";
import { NgxSpinnerService } from "ngx-spinner";
import { Storage } from "src/helpers/storageHelper";
import { ToastrHelper } from '../../helpers/toastrHelper';

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.css"],
})
export class IssuesComponent implements OnInit {
  title = "Issue Tracker";
  _storage: Storage;
  _toastr: ToastrHelper;
  _service: IssuesService;
  _apiErrorString: string;
  _apiError: boolean = false;
  _apiPath: any;

  issues: Issue[] = [];
  isLoading: boolean = false;
  isDeleted: boolean = false;
  commentView: boolean[] = [];

  @Input() id!: number;

  toggleCommentView = (id: number) => {
    this.commentView[id] = !this.commentView[id];
  };

  constructor(
    storage: Storage,
    toastr: ToastrHelper,
    service: IssuesService,
    private spinner: NgxSpinnerService
  ) {
    this._storage = storage;
    this._toastr = toastr;
    this._service = service;
    this._apiErrorString = AppConstants.APIError;
  }

  ngOnInit(): void {
    for (var i = 0; i < this.issues.length; i++) {
      this.commentView[i] = false;
    }

    this.isLoading = true;
    this.spinner.show();
    setTimeout(() => {
      this._service.getIssues().subscribe((response) => {
        if (!response.ok) {
          this._apiError = true;
          this._toastr.toaster(this._apiErrorString, "error");
          throw new Error(this._apiErrorString);
        }
        const _body = response.body!;
        this.issues = _body;
      });
      this._apiError = false;
      this.isLoading = false;
      this.spinner.hide();
    }, 3000);
  }
}
