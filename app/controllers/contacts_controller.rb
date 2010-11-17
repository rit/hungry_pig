class ContactsController < ApplicationController
  def index
    contacts = Contact.order(:last_name).all.
      as_json(:only => [:id, :first_name, :last_name])
    render :json => { :contacts => contacts }
  end

  def update
    contact = Contact.find(params[:id])
    if contact.update_attributes(params[:contact])
      contact = contact.as_json(:only => [:id, :first_name, :last_name])
      render :json => { :contact => contact }
    else
      errors = Hash.new.merge(contact.errors)
      render :json => { :errors => errors }, :status => 422
    end
  end

  def create
    contact = Contact.new(params[:contact])
    if contact.save
      contact = contact.as_json(:only => [:id, :first_name, :last_name])
      render :json => { :contact => contact }
    else
      errors = Hash.new.merge(contact.errors)
      render :json => { :errors => errors }, :status => 422
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    head :ok
  end
end
