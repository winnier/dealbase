class DealSerializer < ActiveModel::Serializer
  attributes :id, :name, :product, :value, :stage, :active, :status, :company_id, :owner_id, :associated_company, :associated_owner, :associated_contacts
  # , :associated_company, :associated_owner, :associated_contacts

  def associated_company
    self.object.company.name
  end

  def associated_owner
    self.object.owner.name
  end

  def associated_contacts
    arr = self.object.contacts
    arr2 = []
    arr.length.times do |i|
      arr2.push(arr[i][:name])
    end
    return arr2
  end

end
