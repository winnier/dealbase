puts "destroying past data"
Owner.destroy_all
Contact.destroy_all
Company.destroy_all
Deal.destroy_all
ContactDeal.destroy_all

puts "Making owners..."
owner1 =Owner.create!(name: "Aaron", email: "aaron@gmail.com", username: "aaron", password_digest: "aaron")
owner2 = Owner.create!(name: "Antonio", email: "antonio@gmail.com", username: "antonio", password_digest: "antonio")
owner3 = Owner.create!(name: "Will", email: "will@gmail.com", username: "will", password_digest: "will")
owner4 = Owner.create!(name: "Haala", email: "haala@gmail.com", username: "haala", password_digest: "haala")
owner5 = Owner.create!(name: "Winnie", email: "winnie@gmail.com", username: "winnie", password_digest: "winnie")

puts "Making contacts..."
number_of_contacts = 20
number_of_contacts.times {Contact.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.phone_number,
    address: Faker::Address.full_address,
    linkedin: "linkedin.com/#{self.name}",
    company_id: rand(1..20),
    owner_id: rand(1..5)
    )}

puts "Creating company..."
20.times {Company.create!(
    name: Faker::Company.name,
    address: Faker::Address.full_address,
    country: Faker::Address.country,
    industry: Faker::Job.field,
    linkedin_url: "linkedin.com/#{self.name}",
    website: "#{self.name}.com",
    owner_id: rand(1..5)
)}

puts "Making deals..."
20.times {Deal.create!(
    product: Faker::Commerce.product_name,
    name: "#{Company.all.sample.name} - #{self.product}",
    value: rand(100..1000),
    active: true,
    status: "",
    company_id: rand(1..5)
)}

puts "Making join table..."
50.times {ContactDeal.create!(
    contact_id: rand(1..20),
    deal_id: rand(1..20),
    company_id: rand(1..20)
)}

