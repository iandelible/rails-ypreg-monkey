require 'rails_helper'

describe Event, :type => :model do

  describe Event, "Associations" do
    it { should belong_to :location }
    it { should have_many :registrations }
    it { should have_many :users }
    it { should have_many :localities }
    it { should have_many :hospitalities }
    # it { should have_many :lodgings }
    it { should have_many :hospitality_assignments }
  end

  describe Event, "Validations" do
    it { should validate_presence_of :event_type }
    it { should validate_presence_of :title }
    it { should validate_presence_of :begin_date }
    it { should validate_presence_of :end_date }
    it { should validate_presence_of :registration_cost }
    it { should validate_presence_of :location_id }
    it { should have_constant :EVENT_TYPE }
  end

  describe Event, "Scopes" do
    describe "#remaining_spaces" do
      it "returns the max capacity of spaces when there are no registrations" do 
        event = build_stubbed(:event)

        expect(event.remaining_spaces).to eq (event.location.max_capacity)
      end

      it "returns the remaining number of available registrations" do
        loc = build_stubbed(:location, max_capacity: 20)
        event = create(:event_with_registrations,
                       registrations_count: 3,
                       location: loc)

        expect(event.remaining_spaces).to eq (17)
      end
    end
  end

  describe "#participating_localities" do
    it "returns the localities participating in the event" do
      event = create(
        :event_with_registrations,
        registrations_count: 2,
        ensure_unique_locality: false)
      loc1 = event.registrations.first.user.locality
      loc2 = event.registrations.second.user.locality

      participating_localities = event.participating_localities
      expect(participating_localities.count).to eq 2
      expect(participating_localities).to contain_exactly(loc1,loc2)
    end
  end

  describe "#registered_saints_from_locality"

  describe "#registered_saints_from_locality" do
    it "returns a hash with registered users per locality" do
      event = create(:event_with_registrations,
                     registrations_count: 2,
                     ensure_unique_locality: true)
      loc  = event.participating_localities.first
      usr1 = event.registrations.first.user
      usr2 = event.registrations.second.user

      expect(event.registered_saints_from_locality(loc)).to contain_exactly(usr1,usr2)
    end
  end

  describe "#registered_localities" do
    it "returns localities with registered saints" do
      event = create(:event_with_registrations)
      loc1 = event.registrations.first.user.locality
      loc2 = event.registrations.second.user.locality
      expect(event.registered_localities).to contain_exactly(loc1,loc2)
    end
  end
end
