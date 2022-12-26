import { Issue } from '../models/issue';
import { HttpClient } from "@angular/common/http";

export class HttpHelper {
  constructor(public http: HttpClient) {}

  Get() {
    let _body: Issue[] = [];
    this.http
      .get<Issue[]>("https://localhost:7082/issue", {
        observe: "response",
        responseType: "json",
      })
      .subscribe((response) => {
        if (!response.ok) {
          throw new Error("oooooooops");
        }
        _body = response.body!;
      });
    
    return _body;
  }
}
