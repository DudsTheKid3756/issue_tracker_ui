import { Injectable } from "@angular/core";
import { AppConstants } from "../constants";
import { Storage } from "src/helpers/storage";
import { HttpHelper } from "../../helpers/http";
import { HttpResponse } from "@angular/common/http";
import { Issue } from "src/models/issue";
import { NgxSpinnerService } from "ngx-spinner";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { ToastrHelper } from "../../helpers/toastr";

@Injectable()
export class IssuesService {
  private componentIssues: BehaviorSubject<Issue[]>;
  private componentApiError: BehaviorSubject<boolean>;
  private componentIsLoading: BehaviorSubject<boolean>;

  apiPath: any;
  baseURL: string;
  path: string;
  fullPath: string;
  apiErrorString: string;
  issuesSubscription: Subscription = new Subscription();

  constructor(
    private storage: Storage,
    private httpHelper: HttpHelper,
    private spinner: NgxSpinnerService,
    private toastr: ToastrHelper
  ) {
    this.apiPath = this.storage.getItem("api", "local");
    this.baseURL = AppConstants.baseURLs[this.apiPath];
    this.path = AppConstants.path;
    this.fullPath = `${this.baseURL}/${this.path}`;
    this.apiErrorString = AppConstants.APIError;

    this.componentIssues = new BehaviorSubject<Issue[]>([]);
    this.componentApiError = new BehaviorSubject<boolean>(true);
    this.componentIsLoading = new BehaviorSubject<boolean>(false);
  }

  getComponentIssues = (): Observable<Issue[]> => {
    return this.componentIssues.asObservable();
  };

  setComponentIssues = (newValue: Issue[]): void => {
    this.componentIssues.next(newValue);
  };

  getComponentApiError = (): Observable<boolean> => {
    return this.componentApiError.asObservable();
  };

  setComponentApiError = (newValue: boolean): void => {
    this.componentApiError.next(newValue);
  };

  getComponentIsLoading = (): Observable<boolean> => {
    return this.componentIsLoading.asObservable();
  };

  setComponentIsLoading = (newValue: boolean): void => {
    this.componentIsLoading.next(newValue);
  };

  getIssues = () => {
    this.issuesSubscription = this.httpHelper
      .httpHelper(this.fullPath, "get")
      .subscribe(
        (response: HttpResponse<Issue[]>) => {
          if (!response.ok) {
            throw new Error(this.apiErrorString);
          }
          setTimeout(() => {
            const _body = response.body!;
            this.setComponentIssues(_body);
            this.setComponentApiError(false);
            this.setComponentIsLoading(false);
            this.spinner.hide();
          }, 3000);
        },
        (err: any) => {
          this.setComponentApiError(true);
          this.setComponentIsLoading(false);
          this.componentApiError
            ? this.toastr.toaster(this.apiErrorString, "error")
            : null;
          this.spinner.hide();
          console.error(err);
        },
        () =>
          setTimeout(
            () =>
              this.toastr.toaster("GET issues request completed", "success"),
            3500
          )
      );
  };

  deleteIssue = (id: number) => {
    this.issuesSubscription = this.httpHelper
      .httpHelper(`${this.fullPath}/${id}`, "delete")
      .subscribe(
        (response: HttpResponse<Issue>) => {
          if (!response.ok) {
            throw new Error(this.apiErrorString);
          }
          this.setComponentIssues(
            this.componentIssues.value.filter((value) => value.id != id)
          );
        },
        (err: any) => console.error(err),
        () => this.toastr.toaster("Issue deleted", "success")
      );
  };
}
