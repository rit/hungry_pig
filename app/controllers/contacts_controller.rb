class ContactsController < ApplicationController
  def index
    contacts = Contact.all.to_json
    contacts = JSON(contacts)
    render :json => { :contacts => contacts }
  end
end
