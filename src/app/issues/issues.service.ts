import { Injectable } from "@angular/core";
import { Issue } from "../../models/issue";
// import { HttpHelper } from "../../helpers/HttpHelper";
import { HttpClient } from "@angular/common/http";
import { AppConstants } from "../constants";
import { Storage } from "src/helpers/storageHelper";

@Injectable()
export class IssuesService {
  _storage: Storage;
  _apiPath: any;
  _baseURL: string;
  _path: string;
  _fullPath: string;

  constructor(private http: HttpClient, storage: Storage) {
    this._storage = storage;
    this._apiPath = this._storage.getItem("api", "local");
    this._baseURL = AppConstants.baseURLs[this._apiPath];
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
