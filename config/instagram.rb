require 'instagram'

Instagram.configure do |config|
  config.client_id = ENV['CLIENT_ID']
  config.client_secret = ENV['CLIENT_SECRET ']
end

Instagram.authorize_url(:redirect_uri => ENV['CALLBACK_URL'])
