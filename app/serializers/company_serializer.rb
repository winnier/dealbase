class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :country, :industry, :linkedin_url, :website
  # :owner_id, :associated_owner, :associated_deals, :employees

  def associated_owner
    self.object.owner.name 
  end

  def associated_deals
    arr = self.object.deals
    arr2 = []
    arr.length.times do |i|
      arr2.push(arr[i][:name])
    end
    return arr2
  end

  def employees
    arr = self.object.contacts
    arr2 = []
    arr.length.times do |i|
      arr2.push(arr[i][:name])
    end
    return arr2
  end

end
