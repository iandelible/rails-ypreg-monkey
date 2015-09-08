require 'rails_helper'

describe Hospitality, type: :model do

  describe 'Associations' do
    it { should belong_to :event }
    it { should belong_to :lodging }
    it { should belong_to :locality }
    it { should belong_to :registration }
    it { should have_many(:registrations)
      .through(:hospitality_registration_assignments).conditions(:uniq) }
    it { should have_many :hospitality_registration_assignments }
  end
end
