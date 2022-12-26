import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IssuesComponent } from "./issues/issues.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IssuesService } from './issues/issues.service';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, IssuesComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: IssuesComponent }]),
    HttpClientModule,
  ],
  providers: [
    IssuesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
