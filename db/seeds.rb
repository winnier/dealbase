puts "Destroying past data"
Owner.destroy_all
User.destroy_all
Contact.destroy_all
Company.destroy_all
Deal.destroy_all
ContactDeal.destroy_all

puts "Making users..."
user1 = User.create!(name: "Aaron", email: "aaron@gmail.com", username: "aaron", password_digest: "aaron")
user2 = User.create!(name: "Antonio", email: "antonio@gmail.com", username: "antonio", password_digest: "antonio")
user3 = User.create!(name: "Will", email: "will@gmail.com", username: "will", password_digest: "will")
user4 = User.create!(name: "Haala", email: "haala@gmail.com", username: "haala", password_digest: "haala")
user5 = User.create!(name: "Winnie", email: "winnie@gmail.com", username: "winnie", password_digest: "winnie")

puts "Creating company..."
50.times {
    company_name = Faker::Company.name
    Company.create!(
    name: company_name,
    address: Faker::Address.full_address,
    country: Faker::Address.country,
    industry: Faker::Job.field,
    linkedin_url: "linkedin.com/#{company_name}",
    # linkedin_url: "linkedin.com/example",
    # website: "#{self.name}.com",
    website: "#{company_name}.com",
    user_id: User.all.sample.id
)}

puts "Creating company..."
20.times {
    company_name = Faker::Company.name
    Company.create!(
    name: company_name,
    address: Faker::Address.full_address,
    country: Faker::Address.country,
    industry: Faker::Job.field,
    linkedin_url: "linkedin.com/#{company_name}",
    # linkedin_url: "linkedin.com/example",
    # website: "#{self.name}.com",
    website: "#{company_name}.com",
    user_id: User.all.sample.id
)}

puts "Making contacts..."
50.times {
    name = Faker::Name.name
    Contact.create!(
    # name: Faker::Name.name,
    name: name,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number,
    address: Faker::Address.full_address,
    # linkedin: "linkedin.com/#{self.name}",
    linkedin_url: "linkedin.com/#{name}",
    # linkedin: "linkedin.com/example",
    # company_id: rand(1..20),
    # owner_id: rand(1..5)
    company_id: Company.all.sample.id,
    user_id: User.all.sample.id 
    )}

puts "Making deals..."
50.times {
    company = Company.all.sample
    user = User.all.sample
    product = Faker::Commerce.product_name
    Deal.create!(
    name: "#{Company.all.sample.name} - #{product} deal",
    product: product,
    # name: "#{company.name} - deal example",
    value: rand(1000..9000),
    stage: rand(1..5),
    active: true,
    status: "",
    company_id: company.id,
    user_id: user.id
)}

puts "Making join table..."
100.times {ContactDeal.create!(
    contact_id: Contact.all.sample.id,
    deal_id: Deal.all.sample.id,
    company_id: Company.all.sample.id
)}

puts "Data done seeding"