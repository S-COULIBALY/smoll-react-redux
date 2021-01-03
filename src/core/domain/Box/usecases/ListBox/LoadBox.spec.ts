import { ListdBox } from "./ILoadBoxPresenter";
//import { ListBox } from "./box";

let box;
describe("RECCUPERATION DE CARTONS", () => {
  let load_box;
  beforeEach(() => {
    load_box = new ListdBox([]);
  });
  it("Je réccupère 0 carton dans la source", () => {
    let box_0 = load_box.load();
    console.log(box_0);
    expect(box_0.length).toEqual(0);
  });

  it.skip("Je réccupère 1 carton dans la source", () => {
    let box_1 = load_box.load();
    expect(box_1.length).toEqual(0);
  });
});
