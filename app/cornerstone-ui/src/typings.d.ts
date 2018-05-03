/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* JSON definition */
declare module "*.json" {
    const value: any;
    export default value;
}