var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var FileComponent = Components.components.file;
var ImageDrawComponent = /** @class */ (function (_super) {
    __extends(ImageDrawComponent, _super);
    function ImageDrawComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageDrawComponent.schema = function () {
        return FileComponent.schema({
            type: 'imagedraw',
            image: 'true',
            storage: 'base64'
        });
    };
    Object.defineProperty(ImageDrawComponent, "builderInfo", {
        get: function () {
            return {
                title: 'Image Draw',
                group: 'basic',
                icon: 'fa fa-image',
                weight: 70,
                schema: ImageDrawComponent.schema()
            };
        },
        enumerable: true,
        configurable: true
    });
    ImageDrawComponent.prototype.render = function () {
        var uploadRender = _super.prototype.render.call(this);
        uploadRender += '<canvas ref="drawpad" height="200px" width="200px></canvas>';
        return uploadRender;
        // return super.render(this.renderTemplate('imagedraw', {
        //     fileSize: this.fileSize,
        //     files: this.dataValue || [],
        //     statuses: this.statuses,
        //     disabled: this.disabled,
        //     support: this.support,
        //     fileDropHidden: this.fileDropHidden
        // }));
    };
    ImageDrawComponent.prototype.attach = function (element) {
        var attachRet = _super.prototype.attach.call(this, element);
        this.loadRefs(element.parentNode, {
            drawpad: 'single'
        });
        var ctx = this.refs.drawpad.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, 150, 75);
        // if (this.refs.drawpad && this.refs.drawpad.length){
        //     const ctx = this.refs.drawpad[0].getContext("2d");
        //     ctx.fillStyle = "#FF0000";
        // ctx.fillRect(0, 0, 150, 75);
        // }
        return attachRet;
    };
    ImageDrawComponent.editForm = FileComponent.editForm;
    return ImageDrawComponent;
}(FileComponent));
export default ImageDrawComponent;
