import { Component, OnInit } from "@angular/core";
import { Storage } from "src/helpers/storageHelper";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Issue Tracker";
  apiPath = "dotnet";
  apiError = false;
  _storage: Storage;

  constructor(storage: Storage) {
    this._storage = storage;
  }

  toggleApiError = (bool: boolean) => (this.apiError = bool);
  toggleApiPath = (event: { type: any; target: any; }) => {
    this.apiError = false;
    this.apiPath = event.target!.value;
    this._storage.storeItem("api", event.target!.value, "local");
  };

  ngOnInit(): void {
    this._storage.storeItem("api", this.apiPath, "local");
  }
}
