// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define([], function() {
    var SkillModel, _ref;
    return SkillModel = (function(_super) {
      __extends(SkillModel, _super);

      function SkillModel() {
        _ref = SkillModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SkillModel.prototype.defaults = {
        thumbnail: "/images/unknown.png"
      };

      return SkillModel;

    })(Backbone.Model);
  });

}).call(this);