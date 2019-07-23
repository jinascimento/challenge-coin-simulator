# frozen_string_literal: true

class HomeController < ApplicationController
  before_action :coin

  def index
    @quote_props = { quote: CoinService.new.get_quotes(@coin) }
  end

  private

  def coin
    @coin = params[:coin] ? params[:coin] : 'USD'
  end
end