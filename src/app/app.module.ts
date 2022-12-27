import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { IssuesComponent } from "./issues/issues.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { IssuesService } from "./issues/issues.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, IssuesComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: "", component: IssuesComponent }]),
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [IssuesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
