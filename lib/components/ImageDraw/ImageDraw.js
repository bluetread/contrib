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
            disabled: true,
            filePattern: '*',
            fileMinSize: '0KB',
            fileMaxSize: '1GB'
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
        uploadRender += '<div><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></div><div ref="markerImage"><a ref="clickStart"><img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" width="100%" crossorigin="anonymous"/></a></div>';
        console.log("render");
        return uploadRender;
    };
    // render() {
    //   console.log("render");
    //   var result = super.render(this.renderTemplate('imagedraw', {
    //     files: this.dataValue || [],
    //     disabled: this.disabled
    //   }));
    //   var test = this.renderTemplate('imagedraw', {
    //     files: this.dataValue || [],
    //     disabled: this.disabled
    //   });
    //   return result;
    // }    
    ImageDrawComponent.prototype.loadImage = function (fileInfo) {
        if (this.component.privateDownload) {
            fileInfo.private = true;
        }
        return this.fileService.downloadFile(fileInfo).then(function (result) { return result.url; });
    };
    ImageDrawComponent.prototype.showMarkerArea = function () {
        var _this = this;
        if (this.refs.gridImage) {
            this.markerArea = new markerjs2.MarkerArea(this.refs.gridImage);
            this.markerArea.targetRoot = this.refs.markerImage;
            // element.className = 'markerImage';
            this.markerArea.settings.displayMode = 'inline';
            // this.markerArea.availableMarkerTypes = this.markerArea.DEFAULT_MARKER_TYPES;
            this.markerArea.availableMarkerTypes = ['FrameMarker', 'FreehandMarker', 'LineMarker', 'TextMarker'];
            this.markerArea.settings.defaultColorSet = ['black', 'red', 'green', 'blue'];
            this.markerArea.settings.defaultColor = 'black';
            this.markerArea.uiStyleSettings.toolbarStyleColorsClassName = 'bg-gray-50';
            this.markerArea.uiStyleSettings.toolbarButtonStyleColorsClassName =
                'bg-gradient-to-t from-gray-50 to-gray-50 hover:from-gray-50 hover:to-pink-50 fill-current text-pink-300';
            this.markerArea.uiStyleSettings.toolbarActiveButtonStyleColorsClassName =
                'bg-gradient-to-t from-pink-100 via-gray-50 to-gray-50 fill-current text-pink-400';
            this.markerArea.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName = "bg-gray-50";
            this.markerArea.uiStyleSettings.toolboxColor = '#F472B6';
            this.markerArea.uiStyleSettings.toolboxAccentColor = '#BE185D';
            this.markerArea.uiStyleSettings.toolboxStyleColorsClassName = 'bg-gray-50';
            this.markerArea.uiStyleSettings.toolboxButtonRowStyleColorsClassName = 'bg-gray-50';
            this.markerArea.uiStyleSettings.toolboxPanelRowStyleColorsClassName =
                'bg-pink-100 bg-opacity-90 fill-current text-pink-400';
            this.markerArea.uiStyleSettings.toolboxButtonStyleColorsClassName =
                'bg-gradient-to-t from-gray-50 to-gray-50 hover:from-gray-50 hover:to-pink-50 fill-current text-pink-300';
            this.markerArea.uiStyleSettings.toolboxActiveButtonStyleColorsClassName =
                'bg-gradient-to-b from-pink-100 to-gray-50 fill-current text-pink-400';
            this.markerArea.addRenderEventListener(function (dataUrl) {
                console.log("DataUrl:" + dataUrl);
                if (_this.refs.gridImage) {
                    _this.setValue(dataUrl);
                    _this.setDataToGridImage(dataUrl);
                    _this.refs.gridImage.src = dataUrl; // doing this just for giggles. Not sure if the above line is working
                }
            });
            this.markerArea.show();
            console.log("Marker JS is Added");
        }
    };
    ImageDrawComponent.prototype.attach = function (element) {
        // console.log("Visible:" + this.visible);
        // console.log("FullMode:" + this.fullMode);
        // console.log("BuilderMode:" + this.builderMode);
        var _this = this;
        console.log("DataValue:" + this.dataValue);
        console.log("DefaultValue:" + this.defaultValue);
        var attachRet = _super.prototype.attach.call(this, element);
        this.loadRefs(element.parentNode, {
            gridImage: 'single',
            clickStart: 'single',
            markerImage: 'single'
        });
        //set the image do what we have persisted
        var imageData = this.getValue();
        if (!Array.isArray(imageData)) {
            console.log("data found to load");
            this.setDataToGridImage(imageData);
        }
        console.log(imageData);
        this.addEventListener(this.refs.clickStart, 'click', function (event) {
            event.preventDefault();
            if (!_this.builderMode) {
                _this.showMarkerArea();
            }
        });
        return attachRet;
    };
    ImageDrawComponent.prototype.setDataToGridImage = function (imageUrl) {
        this.refs.gridImage.setAttribute('src', imageUrl);
    };
    ImageDrawComponent.editForm = editForm;
    return ImageDrawComponent;
}(FileComponent));
export default ImageDrawComponent;
