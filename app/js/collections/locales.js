// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['models/locale'], function(LocaleModel) {
    var LocaleCollection, _ref;
    return LocaleCollection = (function(_super) {
      __extends(LocaleCollection, _super);

      function LocaleCollection() {
        _ref = LocaleCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      LocaleCollection.prototype.model = LocaleModel;

      return LocaleCollection;

    })(Backbone.Collection);
  });

}).call(this);