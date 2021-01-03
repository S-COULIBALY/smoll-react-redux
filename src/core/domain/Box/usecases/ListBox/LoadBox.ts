import { BoxItem } from "../../Entities/BoxItem";

export interface LoadBox {
  execute(): Promise<BoxItem>;
}

export class LoadBox {
  la_source: any[];
  constructor(source: Array<any>) {
    this.la_source = source;
  }

  load = () => {
    return this.la_source;
  };
}

/* export class Box {
  name: string;
  quantity: number;
  dimension: string;
  package: string;
  comments: string;
  constructor(
    name: string,
    dimension: string,
    pack: string,
    quantity: number,
    comments: string
  ) {
    this.name = name;
    this.quantity = quantity;
    this.dimension = dimension;
    this.package = pack;
    this.comments = comments;
 
  // addBox = () => {};
  // deleteBox = () => {};
  // findBox = () => {};
  // listBox = () => {};
  // buyBox = () => {};

 */
