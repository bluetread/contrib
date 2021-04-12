import * as markerjs2 from "markerjs2";
import { Components } from 'formiojs';
import _ from 'lodash';
import editForm from './ImageDraw.form'
import { cornflowerblue } from "color-name";
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
      uploadRender += '<div><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></div><div ref="markerImage"><a ref="clickStart"><img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" width="400px" crossorigin="anonymous"/></a></div>';
      return uploadRender;
    }



    showMarkerArea() {      
      if (this.refs.gridImage){
        this.markerArea = new markerjs2.MarkerArea(this.refs.gridImage);        
        this.markerArea.targetRoot = this.refs.markerImage;
       // element.className = 'markerImage';
        this.markerArea.settings.displayMode = 'inline';
        // this.markerArea.availableMarkerTypes = this.markerArea.DEFAULT_MARKER_TYPES;
        this.markerArea.availableMarkerTypes = ['FrameMarker', 'FreehandMarker', 'LineMarker','TextMarker'];
        this.markerArea.settings.defaultColorSet = ['black','red', 'green', 'blue'];
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

        this.markerArea.addRenderEventListener(dataUrl =>             
        {
          console.log("DataUrl:" + dataUrl);
          if (this.refs.gridImage) {
            this.refs.gridImage.src = dataUrl;
            this.setValue(dataUrl);
          }                            
        });
      
        if(!super.disabled)
        {
          this.markerArea.show();
        }
        console.log("Disabled:" + super.disabled)
        console.log("Marker JS is Added");
    }
  }
   

    attach(element){
      // console.log("Visible:" + this.visible);
      // console.log("FullMode:" + this.fullMode);
      // console.log("BuilderMode:" + this.builderMode);

      console.log("DataValue:" + this.dataValue) 
      console.log("DefaultValue:" + this.defaultValue)       
      console.log("HasValue:" + this.hasValue());

      const attachRet = super.attach(element);
        this.loadRefs(element.parentNode, {
            gridImage: 'single',
            clickStart: 'single', 
            markerImage: 'single'
        });

        //set the image do what we have persisted
        var imageData = this.getValue();
        console.log(imageData);
        // if(imageData.length > )
        // {
        //   this.refs.gridImage.src = imageData;
        // }

        this.addEventListener(this.refs.clickStart, 'click', (event) => {
          event.preventDefault();    
          
          if(!this.builderMode)
          {
            this.showMarkerArea();
          }        
        });
        
        return attachRet;
    }

}

