class ContactsController < ApplicationController
  def index
    contacts = Contact.all.to_json(:only => [:id, :first_name, :last_name])
    contacts = JSON(contacts)
    render :json => { :contacts => contacts }
  end

  def update
    contact = Contact.find(params[:id])
    if contact.update_attributes(params[:contact])
      contact = contact.to_json(:only => [:id, :first_name, :last_name])
      contact = JSON(contact)
      render :json => { :contact => contact }
    else
      errors = Hash.new.merge(contact.errors)
      render :json => { :errors => contact.errors }
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    head :ok
  end
end
