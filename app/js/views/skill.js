// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["collections/qualities", "views/quality", "text!templates/skill.html", "views/page", "controller", "models/page_title"], function(QualityCollection, QualityView, template, PageTitleView, ResumeController, PageTitleModel) {
    var SkillView, _ref;
    return SkillView = (function(_super) {
      __extends(SkillView, _super);

      function SkillView() {
        _ref = SkillView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      SkillView.prototype.tagName = "div";

      SkillView.prototype.className = "skill-container";

      SkillView.prototype.qualityContainer = $(".quality-container");

      SkillView.prototype.template = _.template(template);

      SkillView.prototype.events = {
        "click": "changeSkill",
        "mouseover": "highLightShow",
        "mouseout": "highLightHide"
      };

      SkillView.prototype.initialize = function(options) {
        this.resume = options.resume;
        this.collection = new QualityCollection(this.model.toJSON().quality);
        return this.router = new ResumeController();
      };

      SkillView.prototype.render = function() {
        var title;
        this.$el.html(this.template(this.model));
        title = this.model.toJSON().page_title[Locale.locale.toJSON().link];
        this.$el.find("img").tooltip({
          title: title,
          placement: "bottom"
        });
        return this;
      };

      SkillView.prototype.changeSkill = function(event) {
        this.activate(this.model);
        this.resume.changePageTitle();
        return this.router.navigate("!/" + this.model.toJSON().link, {
          trigger: true
        });
      };

      /*renderQualities: (quality) ->
        qualityView = new QualityView model: quality
        @qualityContainer.append qualityView.render().el
        @qualityContainer.show()
      */


      SkillView.prototype.highLightShow = function() {
        if (this.model.toJSON().active === false) {
          this.showSkill(400);
        }
        return this.$el.find("img").tooltip('show');
      };

      SkillView.prototype.highLightHide = function() {
        if (this.model.toJSON().active === false) {
          return this.hideSkill(400);
        }
      };

      SkillView.prototype.clearSkill = function(model) {
        var el;
        el = $("#" + model.get("id"));
        el.find("img").first().removeClass("active");
        return el;
      };

      SkillView.prototype.isActive = function() {
        return /active/i.test(this.$el.attr('class'));
      };

      SkillView.prototype.showSkill = function(time, model) {
        var el;
        if (time == null) {
          time = 0;
        }
        if (model == null) {
          model = this.model;
        }
        el = $("#" + model.get("id"));
        return el.fadeTo(time, 1);
      };

      SkillView.prototype.hideSkill = function(time, model) {
        var el;
        if (time == null) {
          time = 0;
        }
        if (model == null) {
          model = this.model;
        }
        el = $("#" + model.get("id"));
        return el.fadeTo(time, 0.5);
      };

      SkillView.prototype.activate = function(model) {
        var newActive, oldActive;
        oldActive = this.resume.collection.findWhere({
          active: true
        });
        newActive = this.resume.collection.findWhere({
          id: model.get("id")
        });
        oldActive.set({
          active: false
        });
        newActive.set({
          active: true
        });
        newActive.set({
          "class": "active"
        });
        this.showSkill(0, newActive);
        return this.deactive(oldActive);
      };

      SkillView.prototype.deactive = function(model) {
        model.set({
          "class": ""
        });
        return this.hideSkill(0, model);
      };

      return SkillView;

    })(Backbone.View);
  });

}).call(this);
