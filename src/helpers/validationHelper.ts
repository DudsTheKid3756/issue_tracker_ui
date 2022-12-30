import { AppConstants } from "../app/constants";
export class Validation {
  _regex: RegExp;
  _blank: string;
  _invalid: string;

  constructor() {
    this._regex = AppConstants.alphanumericRegex;
    this._blank = AppConstants.blankError;
    this._invalid = AppConstants.invalidError;
  }

  validateStrings = (obj: { [field: string]: any }) => {
    const errors: { [field: string]: any } = {};
    Object.keys(obj).forEach((key: string) => {
      const value: string = obj[key];
      const formattedField: string = key[0].toUpperCase() + key.substring(1, key.length);
      if (value == "") errors[key] = formattedField + this._blank;
      else if (!this._regex.test(value)) errors[key] = formattedField + this._invalid;
    });

    return errors;
  };
}
