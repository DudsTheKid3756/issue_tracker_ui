import { Reminder } from "../models/reminder";
import { Time } from "@angular/common";
export class AppConstants {
  public static get baseURLs(): { [x: string]: string } {
    return { dotnet: "https://localhost:7082", java: "http://localhost:8080" };
  }

  public static get path(): string {
    return "issue";
  }

  public static get APIError(): string {
    return "Could not connect to API. Try again later.";
  }

  public static get blankError(): string {
    return " field cannot be blank";
  }

  public static get invalidError(): string {
    return " field is invalid";
  }

  public static get badRequestError(): string {
    return "Unable to submit request. Please fix errors and submit again";
  }

  public static get newIssueSuccessMessage(): string {
    return "New Issue successfully added!";
  }

  public static get updateSuccessMessage(): string {
    return "Issue updated successfully!";
  }

  public static get alphanumericRegex(): RegExp {
    return /^([\d\w-'_,.][\s]*)+\s*$/;
  }

  public static get alertOptions(): { [x: string]: string | number | null }[] {
    return [
      { text: "No alert", duration: null },
      { text: "On time", duration: 0 },
      { text: "Half hour", duration: 30 },
      { text: "1 hour", duration: 60 },
      { text: "1 day", duration: 1440 },
      { text: "2 days", duration: 2880 },
    ];
  }

  public static get initialReminder() {
    return {
      date: "",
      time: "",
      alert: "",
    };
  }
}
