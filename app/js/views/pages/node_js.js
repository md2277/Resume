// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['text!templates/page_content.html', 'views/page_container'], function(template, PageContainer) {
    var NodeJSView, _ref;
    return NodeJSView = (function(_super) {
      __extends(NodeJSView, _super);

      function NodeJSView() {
        _ref = NodeJSView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NodeJSView.prototype.template = _.template(template);

      NodeJSView.prototype.pageFile = "node_js";

      return NodeJSView;

    })(PageContainer);
  });

}).call(this);
