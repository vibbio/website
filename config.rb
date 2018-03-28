# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload
activate :directory_indexes

set :relative_links, true
set :markdown_engine, :kramdown
set :markdown, parse_block_html: true

# Layouts
# https://middlemanapp.com/basics/layouts/
page "/careers/*", :layout => "text-page"


# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# module EmojiHelper
helpers do
  def emojify(content, **options)
    Twemoji.parse(h(content), options).html_safe if content.present?
  end
  def active_navigation(page)
    current_page.url.include?(page) ? "active" : ''
  end
end

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
   activate :relative_assets
   activate :minify_css
   activate :imageoptim
#   activate :minify_javascript
end
