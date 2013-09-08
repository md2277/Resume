define [
  'text!templates/page_content.html'
  'mdown!pages/git.md'
  'views/page_container'
], (template, git, PageContainer) ->
  class GitView extends PageContainer
    template: _.template template
    page: _.template git