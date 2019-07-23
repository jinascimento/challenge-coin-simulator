class CoinService
  attr_reader :url

  def initialize
    @url = "#{EXTERNAL_RESOURCES_CONFIG['coin']}"
  end

  def get_quotes(coins)
    response = Faraday.get("#{@url}/all/#{coins}")
    JSON.parse(response.body)
  end
end