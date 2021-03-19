import * as markerjs2 from "markerjs2";
import { Components } from 'formiojs';
import _ from 'lodash';
const FileComponent = (Components as any).components.file;

export default class ImageDrawComponent extends FileComponent {
    public static schema() {
        return FileComponent.schema({
          type: 'imagedraw',
          image: 'true',
          storage: 'base64'
        });
      }

      public static editForm = FileComponent.editForm;
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
      uploadRender += '<a ref="clickStart"><img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" width="400px" crossorigin="anonymous"/></a>';
      return uploadRender;
    }

    attach(element){

        const attachRet = super.attach(element);
        this.loadRefs(element.parentNode, {
            gridImage: 'single',
            clickStart: 'single'
        });

        this.addEventListener(this.refs.clickStart, 'click', (event) => {
          event.preventDefault();
          this.markerArea.show();
        });

        if (this.refs.gridImage){
        this.markerArea = new markerjs2.MarkerArea(this.refs.gridImage);
        this.markerArea.settings.displayMode = 'inline';
        this.markerArea.availableMarkerTypes = this.markerArea.DEFAULT_MARKER_TYPES;
        
        this.markerArea.addRenderEventListener((dataURL) => this.refs.gridImage.src = dataURL);
        }
        else{
          this.markerArea.close();
        }
        return attachRet;
    }

}

