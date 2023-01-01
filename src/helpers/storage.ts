import { jsonObj } from "../@types/jsonObj";

export class Storage {
  storeItem = (
    key: string,
    item: jsonObj | string | boolean,
    storageType: string
  ): void =>
    //@ts-ignore
    window[`${storageType}Storage`].setItem(
      key,
      typeof item != "string" ? JSON.stringify(item) : item
    );

  getItem = (key: string, storageType: string): jsonObj | string | boolean => {
    //@ts-ignore
    const item = window[`${storageType}Storage`].getItem(key);
    return typeof item == "string" ? item : JSON.parse(item);
  };

  removeItem = (key: string, storageType: string): void =>
    //@ts-ignore
    window[`${storageType}Storage`].removeItem(key);

  clearStorage = (storageType: string): void =>
    //@ts-ignore
    window[`${storageType}Storage`].clear();
}
