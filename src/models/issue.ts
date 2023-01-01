import { Reminder } from "./reminder";

export interface Issue {
  id: number;
  title: string;
  comment: string;
  created: Date;  //review pipes
  color: string;
  hasReminder: boolean;
  isCompleted: boolean;
  reminder: Reminder;
}
