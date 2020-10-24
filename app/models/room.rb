class Room < ApplicationRecord
    before_create :generate_room_token

    def generate_room_token
        OpentokTokenGenerator.call(self)
    end
end
