class Api::V1::BaseController < ApplicationController 
  # the respond_to method ensures that all actions from the controllers will resond with JSON
  respond_to :json
end
