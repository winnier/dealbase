const CompanyCard = ({ companies }) => {

   const companyList = companies.map(company => {
        return(
            <div className="details-card">
                <h5>{company.name}</h5>
                <p>Company Id: {company.id}</p>
                <p>Company Address: {company.address}</p>
                <p>Country: {company.country}</p>
                <p>Industry: {company.industry}</p>
                <p>LinkedIn: {company.linkedin_url}</p>
                <p>Website: {company.website}</p>
            </div>
        )
    })
}

export default CompanyCard;