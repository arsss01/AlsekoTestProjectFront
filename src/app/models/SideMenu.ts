export class SideMenu {
  name: string;
  icon: string;
  routing: string;
  child: boolean;
  menuChild: SideMenu[] = [];

  public setParams(data: any) {
    this.name = data.name;
    this.icon = data.icon;
    this.routing = data.routing;
    this.child = data.child;
  }

  public setParamsChild(data: any[]) {
    this.menuChild = data;
  }
}
