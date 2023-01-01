import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jsonObj } from '../@types/jsonObj';

@Injectable()
export class HttpHelper {
  options = {
    observe: "response" as const,
    responseType: "json" as const,
  };

  constructor(private http: HttpClient) {}

  httpHelper = (url: string, method: string, body?: any) => {
    // @ts-ignore
    return this.http[method.toLowerCase()](url, {...this.options, body: body ?? null});
  };
}
