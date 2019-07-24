require 'rails_helper'

RSpec.describe HomeController, type: :controller do

  describe 'Home' do
    context '#index' do
      it 'responds successfully' do
        get :index
        expect(response).to be_success
      end

      it 'responds a 200 response' do
        get :index
        expect(response).to have_http_status(200)
      end

      it 'Get with EUR coin' do
        get :index, params: { coin: 'EUR' }

        expect(assigns(:quote_props)[:quote].has_key?("EUR")).to be_truthy
      end

      it 'Get with USD coin' do
        get :index, params: { coin: 'USD' }
        expect(assigns(:quote_props)[:quote].has_key?("USD")).to be_truthy
      end
    end
  end
end
