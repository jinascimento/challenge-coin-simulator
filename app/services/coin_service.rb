class CoinService
  attr_reader :url

  def initialize
    @url = "#{ENV['COINS_URL']}"
  end

  def get_quotes(coins)
    response = Faraday.get("#{@url}/all/#{coins}")
    JSON.parse(response.body)
  end
end