export interface DataItemModel {
  name: string;
  filePath: string;
}

export interface DataModel {
  id: string;
  items: DataItemModel[];
}
