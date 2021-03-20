Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '    \r\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n<!-- <div\r\n  class="signature-pad-body"\r\n  style="width: ' +
((__t = (ctx.component.width)) == null ? '' : __t) +
';height: ' +
((__t = (ctx.component.height)) == null ? '' : __t) +
';padding:0;margin:0;"\r\n  tabindex="' +
((__t = (ctx.component.tabindex || 0)) == null ? '' : __t) +
'"\r\n  ref="padBody"\r\n> -->\r\n<div>\r\n<img ref="gridImage" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Numbered_14x20_grid.svg" style="width: 100%;height: 100%;" />\r\n  <!-- <a class="btn btn-sm btn-light signature-pad-refresh" ref="refresh">\r\n    <i class="' +
((__t = (ctx.iconClass('refresh'))) == null ? '' : __t) +
'"></i>\r\n  </a> -->\r\n  <!-- <canvas class="sketch-pad-canvas" height="' +
((__t = (ctx.component.height)) == null ? '' : __t) +
'" ref="canvas"></canvas> -->\r\n  <!-- ';
 if (ctx.required) { ;
__p += '\r\n  <span class="form-control-feedback field-required-inline text-danger">\r\n    <i class="' +
((__t = (ctx.iconClass('asterisk'))) == null ? '' : __t) +
'"></i>\r\n  </span>\r\n  ';
 } ;
__p += ' -->\r\n  \r\n  <!-- <img style="width: 100%;display: none;" ref="signatureImage"> -->\r\n</div>\r\n<!-- ';
 if (ctx.component.footer) { ;
__p += '\r\n  <div class="signature-pad-footer">\r\n    ' +
((__t = (ctx.t(ctx.component.footer, { _userInput: true }))) == null ? '' : __t) +
'\r\n  </div>\r\n';
 } ;
__p += ' -->';
return __p
}