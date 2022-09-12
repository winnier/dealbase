class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :associated_contacts, :associated_companies, :associated_deals

  def associated_contacts
    arr = self.object.contacts
    arr2 = []
    arr.length.times do |i|
      arr2.push(arr[i][:name])
    end
    return arr2
  end

  def associated_companies
    arr = self.object.companies
    arr2 = []
    arr.length.times do |i|
      arr2.push(arr[i][:name])
    end
    return arr2
  end

  def associated_deals
    arr = self.object.deals
    arr2 = []
    arr.length.times do |i|
      arr2.push(arr[i][:name])
    end
    return arr2
  end
end
