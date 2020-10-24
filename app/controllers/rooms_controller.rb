class RoomsController < ApplicationController
  def create
    @room = Room.find_or_create_by(name: params[:name])
    
  end
  
  def show
    @room = Room.find_or_create_by(name: params[:name])
  end
end
