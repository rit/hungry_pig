require 'spec_helper'

describe ContactsController do
  context "#update" do
    it 'updates the contact with the params' do
      contact = Contact.create(:first_name => 'Yo', :last_name => 'Ming')
      post :update, :id => contact.id, :contact => {:first_name => 'Yao'}
      Contact.find(contact.id).first_name.should == 'Yao'
    end
  end
end
