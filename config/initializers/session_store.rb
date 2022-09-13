if Rails.env === 'production'
    Rails.application.config.session_store :cookie_store, key: 'DealBase', domain: 'DealBase-API'
else
    Rails.application.config.session_store :cookie_store, key: 'DealBase'
end