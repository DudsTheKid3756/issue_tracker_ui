type jsObject = {
  [x: string]: string;
};

export class Storage {
  storeItem = (key: string, item: jsObject, storageType: string): void =>
    //@ts-ignore
    window[`${storageType}Storage`].setItem(key, JSON.stringify(item));

  getItem = (key: string, storageType: string): jsObject =>
    //@ts-ignore
    JSON.parse(window[`${storageType}Storage`].getItem(key));

  removeItem = (key: string, storageType: string): void =>
    //@ts-ignore
    window[`${storageType}Storage`].removeItem(key);

  clearStorage = (storageType: string): void =>
    //@ts-ignore
    window[`${storageType}Storage`].clear();
}
