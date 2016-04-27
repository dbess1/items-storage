class Api::V1::BaseController < ApplicationController 
  # the respond_to method ensures that all actions from the controllers will resonbd with JSON
  respond_to :json
end
