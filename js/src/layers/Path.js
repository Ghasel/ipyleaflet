// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const vectorlayer = require('./VectorLayer.js');

export class LeafletPathModel extends vectorlayer.LeafletVectorLayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletPathView',
      _model_name: 'LeafletPathModel',
      stroke: true,
      color: '#0033FF',
      weight: 5,
      fill: true,
      fill_color: null,
      fill_opacity: 0.2,
      dash_array: null,
      line_cap: 'round',
      line_join: 'round',
      pointer_events: '',
      class_name: ''
    };
  }
}

export class LeafletPathView extends vectorlayer.LeafletVectorLayerView {
  model_events() {
    super.model_events();
    this.obj.setStyle(this.get_options());
  }
}
