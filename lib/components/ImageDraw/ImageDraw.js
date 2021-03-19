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
import * as markerjs2 from "markerjs2";
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
                icon: 'pencil',
                weight: 70,
                schema: ImageDrawComponent.schema()
            };
        },
        enumerable: true,
        configurable: true
    });
    ImageDrawComponent.prototype.render = function () {
        var uploadRender = _super.prototype.render.call(this);
        uploadRender += '<a ref="clickStart"><img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" width="400px" crossorigin="anonymous"/></a>';
        return uploadRender;
    };
    ImageDrawComponent.prototype.attach = function (element) {
        var _this = this;
        var attachRet = _super.prototype.attach.call(this, element);
        this.loadRefs(element.parentNode, {
            gridImage: 'single',
            clickStart: 'single'
        });
        this.addEventListener(this.refs.clickStart, 'click', function (event) {
            event.preventDefault();
            _this.markerArea.show();
        });
        if (this.refs.gridImage) {
            this.markerArea = new markerjs2.MarkerArea(this.refs.gridImage);
            this.markerArea.settings.displayMode = 'inline';
            this.markerArea.availableMarkerTypes = this.markerArea.DEFAULT_MARKER_TYPES;
            this.markerArea.addRenderEventListener(function (dataURL) { return _this.refs.gridImage.src = dataURL; });
        }
        else {
            this.markerArea.close();
        }
        return attachRet;
    };
    ImageDrawComponent.editForm = FileComponent.editForm;
    return ImageDrawComponent;
}(FileComponent));
export default ImageDrawComponent;
