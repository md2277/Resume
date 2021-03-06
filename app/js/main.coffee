requirejs.config
  baseUrl: 'js'
  paths:
    text: 'lib/text'
    markdownConverter : 'lib/requirejs-plugins/lib/Markdown.Converter'
    mdown: 'lib/requirejs-plugins/src/mdown'
  shim:
    'lib/underscore-min':
      exports: '_'
    'lib/backbone-min':
      deps: ['lib/underscore-min']
      exports: 'Backbone'
    'lib/markdown':
      exports: 'markdown'
    'resume':
      deps: ['lib/underscore-min', 'lib/backbone-min', 'lib/markdown']

require(["resume"],
  (BabenkoResume) ->
    window.BabenkoResume = new BabenkoResume()
    ####$('body').find(".skill-container").first().find('.skill').click();
    #$('body').find("#locale-container").first().find('.locale').first().find("span").click();
    #$('body').find(".skill-container").first().find('.skill').removeClass("opacity-100").removeClass("opacity-70")
    #$('body').find(".skill-container").first().find('img').addClass('opacity-100').addClass("active").fadeTo(0, 1)###
    hljs.initHighlighting()
)