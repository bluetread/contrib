declare const FileComponent: any;
export default class ImageDrawComponent extends FileComponent {
    static schema(): any;
    static editForm: any;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    render(): any;
    getValue(): any;
    get emptyValue(): any[];
    get modes(): {
        pencil: {
            title: string;
            state: {
                mode: string;
            };
        };
    };
    attach(element: any): any;
}
export {};
