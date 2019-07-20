# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    CoinService.new.get_quotes('USD,EUR')
  end
end