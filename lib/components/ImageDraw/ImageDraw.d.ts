import editForm from './ImageDraw.form';
declare const FileComponent: any;
export default class ImageDrawComponent extends FileComponent {
    static schema(): any;
    static editForm: typeof editForm;
    static get builderInfo(): {
        title: string;
        group: string;
        icon: string;
        weight: number;
        schema: any;
    };
    render(): any;
    showMarkerArea(): void;
    attach(element: any): any;
}
export {};
