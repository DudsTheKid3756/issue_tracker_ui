import { AppConstants } from "../app/constants";
import { jsonObj } from '../@types/jsonObj';

export class Validation {
  _regex: RegExp;
  _blank: string;
  _invalid: string;

  constructor() {
    this._regex = AppConstants.alphanumericRegex;
    this._blank = AppConstants.blankError;
    this._invalid = AppConstants.invalidError;
  }

  validateStrings = (obj: jsonObj) => {
    const errors: jsonObj = {};
    Object.keys(obj).forEach((key: string) => {
      const value: string = obj[key];
      const formattedField: string = key[0].toUpperCase() + key.substring(1, key.length);
      if (value == "") errors[key] = formattedField + this._blank;
      else if (!this._regex.test(value)) errors[key] = formattedField + this._invalid;
    });

    return errors;
  };
}
