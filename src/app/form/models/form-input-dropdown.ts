import { FormInputBase } from "./form-input-base";
export class FormInputDropdown extends FormInputBase<string> {
  override controlType = "dropdown";
}
