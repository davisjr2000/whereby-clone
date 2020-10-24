class Room < ApplicationRecord
    before_create :generate_room_token

    def generate_room_token
        o = OpentokTokenGenerator.new(self)
        o.generate_token!
    end
end
