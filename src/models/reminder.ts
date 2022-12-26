import { Time } from "@angular/common";

export interface Reminder {
  date: Date;  //review pipes
  time: Time;
  alert: string;
}
