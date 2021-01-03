import { BoxItem } from "./BoxItem";

export interface BoxItemsRepository {
  execute(): Promise<BoxItem>;
}
