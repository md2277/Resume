// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define([], function() {
    var PageTitleModel, _ref;
    return PageTitleModel = (function(_super) {
      __extends(PageTitleModel, _super);

      function PageTitleModel() {
        _ref = PageTitleModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      PageTitleModel.prototype.defaults = {
        page_title: ""
      };

      return PageTitleModel;

    })(Backbone.Model);
  });

}).call(this);
