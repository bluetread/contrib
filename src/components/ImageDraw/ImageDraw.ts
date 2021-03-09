import { Components } from 'formiojs';
const FileComponent = (Components as any).components.field;

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
        icon: 'fa fa-image',
        weight: 70,
        schema: ImageDrawComponent.schema()
      };
    }

    render(){
        return super.render(this.renderTemplate('imagedraw', {
            fileSize: this.fileSize,
            files: this.dataValue || [],
            statuses: this.statuses,
            disabled: this.disabled,
            support: this.support,
            fileDropHidden: this.fileDropHidden
        }));
    }

    attach(element){
        const attachRet = super.attach(element);
        this.loadRefs(element.parentNode, {
            drawpad: 'multiple'
        });
        if (this.refs.drawpad && this.refs.drawpad.length){
            const ctx = this.refs.drawpad[0].getContext("2d");
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(0, 0, 150, 75);
        }
        
        return attachRet;
    }
}