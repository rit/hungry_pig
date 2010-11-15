desc "Create contact"
task :contact => :environment do
  Contact.delete_all
  puts 'Creating contacts'
  10.times do
    person = {:first_name => Faker::Name.first_name,
      :last_name => Faker::Name.last_name}
    Contact.create!(person)
  end
  puts 'done.'
end
