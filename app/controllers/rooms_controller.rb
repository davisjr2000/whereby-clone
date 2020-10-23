class RoomsController < ApplicationController
  def show
    @room = Room.find_or_create_by(name: params[:name])
  end
end
