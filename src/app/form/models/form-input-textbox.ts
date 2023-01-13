import { FormInputBase } from "./form-input-base";
export class FormInputTextbox extends FormInputBase<string> {
  override controlType = "textbox";
}
