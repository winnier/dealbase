class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone_number, :address, :linkedin_url, :company_id, :owner_id, :associated_company, :associated_owner, :associated_deals

  def associated_company
    self.object.company.name
  end

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
    # extracting just the names of all the deals and returning those
  end
end
