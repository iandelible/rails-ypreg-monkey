YpwReg::Application.configure do
  # from http://guides.rubyonrails.org/asset_pipeline.html#local-precompilation
  # config.assets.prefix = "/dev-assets"
  # Settings specified here will take precedence over those in config/application.rb.

  config.allow_forgery_protection = false

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send.
  config.action_mailer.raise_delivery_errors = true

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations
  config.active_record.migration_error = :page_load

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = true

  #ActionMailer
  config.action_mailer.default_url_options = { host: 'localhost:3000' }
  config.action_mailer.delivery_method = :letter_opener #:smtp
  config.action_mailer.perform_deliveries = true
  
  # Simplecov (https://github.com/colszowka/simplecov#want-to-use-spring-with-simplecov)
  config.serve_static_files = false
  config.eager_load = false
end
