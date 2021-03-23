import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import ImageDrawEditDisplay from './editForm/ImageDraw.edit.display';
export default function(...extend) {
    return baseEditForm([
      {
        key: 'display',
        components: ImageDrawEditDisplay
      }
    ], ...extend);
  }