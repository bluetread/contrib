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
import editForm from './ImageDraw.form';
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
            storage: 'base64',
            disabled: true
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
        uploadRender += '<div><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></div><div id="markerImage"><a ref="clickStart"><img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" width="400px" crossorigin="anonymous"/></a></div>';
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
            if (_this.refs.gridImage) {
                _this.markerArea = new markerjs2.MarkerArea(_this.refs.gridImage);
                _this.markerArea.targetRoot = document.getElementById('markerImage');
                // element.className = 'markerImage';
                _this.markerArea.settings.displayMode = 'inline';
                _this.markerArea.availableMarkerTypes = _this.markerArea.DEFAULT_MARKER_TYPES;
                _this.markerArea.settings.defaultColorSet = ['black', 'red', 'green', 'blue'];
                _this.markerArea.settings.defaultColor = 'black';
                _this.markerArea.uiStyleSettings.toolbarStyleColorsClassName = 'bg-gray-50';
                _this.markerArea.uiStyleSettings.toolbarButtonStyleColorsClassName =
                    'bg-gradient-to-t from-gray-50 to-gray-50 hover:from-gray-50 hover:to-pink-50 fill-current text-pink-300';
                _this.markerArea.uiStyleSettings.toolbarActiveButtonStyleColorsClassName =
                    'bg-gradient-to-t from-pink-100 via-gray-50 to-gray-50 fill-current text-pink-400';
                _this.markerArea.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName = "bg-gray-50";
                _this.markerArea.uiStyleSettings.toolboxColor = '#F472B6';
                _this.markerArea.uiStyleSettings.toolboxAccentColor = '#BE185D';
                _this.markerArea.uiStyleSettings.toolboxStyleColorsClassName = 'bg-gray-50';
                _this.markerArea.uiStyleSettings.toolboxButtonRowStyleColorsClassName = 'bg-gray-50';
                _this.markerArea.uiStyleSettings.toolboxPanelRowStyleColorsClassName =
                    'bg-pink-100 bg-opacity-90 fill-current text-pink-400';
                _this.markerArea.uiStyleSettings.toolboxButtonStyleColorsClassName =
                    'bg-gradient-to-t from-gray-50 to-gray-50 hover:from-gray-50 hover:to-pink-50 fill-current text-pink-300';
                _this.markerArea.uiStyleSettings.toolboxActiveButtonStyleColorsClassName =
                    'bg-gradient-to-b from-pink-100 to-gray-50 fill-current text-pink-400';
                _this.markerArea.addRenderEventListener(function (dataURL) { return _this.refs.gridImage.src = dataURL; });
                event.preventDefault();
                _this.markerArea.show();
            }
            ;
        });
        return attachRet;
    };
    ImageDrawComponent.editForm = editForm;
    return ImageDrawComponent;
}(FileComponent));
export default ImageDrawComponent;
