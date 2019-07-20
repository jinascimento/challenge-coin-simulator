class CoinService
  def get_quotes(coins = nil)
    url = "#{EXTERNAL_RESOURCES_CONFIG['coin']}/all/#{coins}"
    Faraday.get(url)
  end
end