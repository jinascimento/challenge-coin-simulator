config_file = Rails.root.join('config', 'external_resources.yml')

EXTERNAL_RESOURCES_CONFIG = YAML.load_file(config_file)[Rails.env]
