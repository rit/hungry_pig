class Contact < ActiveRecord::Base
  validates_presence_of :first_name, :last_name

  index do
    first_name
    last_name
  end
end
