import { Injectable, Output } from '@angular/core';
import { AppConstants } from "../constants";
import { Storage } from "src/helpers/storage";
import { HttpHelper } from "../../helpers/http";
import { HttpResponse } from "@angular/common/http";
import { Issue } from "src/models/issue";

@Injectable()
export class IssuesService {
  apiPath: any;
  baseURL: string;
  path: string;
  fullPath: string;
  apiErrorString: string;

  constructor(
    private storage: Storage,
    private httpHelper: HttpHelper,
  ) {
    this.apiPath = this.storage.getItem("api", "local");
    this.baseURL = AppConstants.baseURLs[this.apiPath];
    this.path = AppConstants.path;
    this.fullPath = `${this.baseURL}/${this.path}`;
    this.apiErrorString = AppConstants.APIError;
  }

  getIssues = () => {
    return this.httpHelper.httpHelper(this.fullPath, "get");
  };

  deleteIssue = (id: number) => {
    return this.httpHelper
      .httpHelper(`${this.fullPath}/${id}`, "delete")
      .subscribe({
        next: (response: HttpResponse<Issue>) => {
          if (!response.ok) {
            throw new Error(this.apiErrorString);
          }
          window.location.reload();
          return response;
        },
        error: (error: any) => console.log(error),
      });
  };
}
