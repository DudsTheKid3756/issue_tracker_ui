import { FormInputBase } from "./form-input-base";
export class FormInputCheckbox extends FormInputBase<string> {
  override controlType = "checkbox";
}
