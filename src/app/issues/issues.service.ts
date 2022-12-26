import { Injectable } from "@angular/core";
import { Issue } from "../../models/issue";
import { HttpHelper } from "../../helpers/HttpHelper";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../constants";

@Injectable()
export class IssuesService {
  _baseURL: string;
  _path: string;
  _fullPath: string;

  constructor(private http: HttpClient) {
    this._baseURL = AppConstants.baseURLs.dotnet;
    this._path = AppConstants.path;
    this._fullPath = `${this._baseURL}/${this._path}`;
  }
  // helper = new HttpHelper(this.http);

  getIssues() {
    return this.http.get<Issue[]>(this._fullPath, {
      observe: "response",
      responseType: "json",
    });
  }
}
