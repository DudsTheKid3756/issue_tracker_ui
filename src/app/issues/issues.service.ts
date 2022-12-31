import { Injectable, Input } from "@angular/core";
import { Issue } from "../../models/issue";
// import { HttpHelper } from "../../helpers/HttpHelper";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../constants";
import { Storage } from "src/helpers/storageHelper";
import { ToastrHelper } from "../../helpers/toastrHelper";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class IssuesService {
  _apiPath: any;
  _baseURL: string;
  _path: string;
  _fullPath: string;

  constructor(
    private http: HttpClient,
    private storage: Storage,
  ) {
    this._apiPath = this.storage.getItem("api", "local");
    this._baseURL = AppConstants.baseURLs[this._apiPath];
    this._path = AppConstants.path;
    this._fullPath = `${this._baseURL}/${this._path}`;
  }
  // helper = new HttpHelper(this.http);

  getIssues() {
    return this.http
      .get<Issue[]>(this._fullPath, {
        observe: "response",
        responseType: "json",
      });
  }
}
