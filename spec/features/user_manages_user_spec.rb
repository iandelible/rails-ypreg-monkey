require 'rails_helper'

feature 'User can manage an user account'

#	scenario 'User can access user index' do
#		visit users_path
#		expect(page).to have_content('Users')
#	end
#
#	scenario 'Adds an user to the library' do
#
#		visit users_path
#
#		expect{
#			click_link 'Add User'
#			fill_in 'user_firstname', with: 'Test'
#			fill_in 'user_lastname', with: 'User'
#			fill_in 'user_email', with: 'test@email.com'
#			#fill_in 'password', with: 'password'
#			click_button 'Create User'
#			}.to change(User, :count).by(1)
#
#		expect(current_path).to eq users_path
#
#		expect(page).to have_content 'New user created'
#		within 'h1' do
#			expect(page).to have_content 'Users'
#		end
#			expect(page).to have_content('test@email.com')
#
#			expect(page).to have_content 'User, Test'
#	end

#end
