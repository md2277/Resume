// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['text!templates/page_content.html', 'views/page_container'], function(template, PageContainer) {
    var _ref;
    return window.AboutMeView = (function(_super) {
      __extends(AboutMeView, _super);

      function AboutMeView() {
        _ref = AboutMeView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      AboutMeView.prototype.template = _.template(template);

      AboutMeView.prototype.pageFile = "about_me";

      return AboutMeView;

    })(PageContainer);
  });

}).call(this);
