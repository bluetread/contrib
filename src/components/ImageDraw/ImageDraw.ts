import * as markerjs2 from "markerjs2";
import { Components } from 'formiojs';
import _ from 'lodash';
import editForm from './ImageDraw.form'
const FileComponent = (Components as any).components.file;

export default class ImageDrawComponent extends FileComponent {
    public static schema() {
        return FileComponent.schema({
          type: 'imagedraw',
          image: 'true',
          storage: 'base64',
          disabled: true
        });
      }

      public static editForm = editForm;
      public static get builderInfo() {
        return{  
          title: 'Image Draw',
          group: 'basic',
          icon: 'pencil',
          weight: 70,
          schema: ImageDrawComponent.schema()
      };
    }

    render(){
      let uploadRender = super.render();
      uploadRender += '<div><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></div><div id="markerImage"><a ref="clickStart"><img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" width="400px" crossorigin="anonymous"/></a></div>';
      return uploadRender;
    }

   

    attach(element){

        const attachRet = super.attach(element);
        this.loadRefs(element.parentNode, {
            gridImage: 'single',
            clickStart: 'single'
        });

        this.addEventListener(this.refs.clickStart, 'click', (event) => {
          if (this.refs.gridImage){
            this.markerArea = new markerjs2.MarkerArea(this.refs.gridImage);
            this.markerArea.targetRoot = document.getElementById('markerImage');
           // element.className = 'markerImage';
            this.markerArea.settings.displayMode = 'inline';
            this.markerArea.availableMarkerTypes = this.markerArea.DEFAULT_MARKER_TYPES;
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
  
            this.markerArea.addRenderEventListener((dataURL) => this.refs.gridImage.src = dataURL);
           
            event.preventDefault();
            this.markerArea.show();
          };
  
        });
        
        return attachRet;
    }

}

