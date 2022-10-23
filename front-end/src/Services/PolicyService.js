import axios from 'axios'

const POLICY_REST_API_URL = 'http://localhost:8080/api/policy-holders/'

class PolicyService
{
    getPolicyHolders()
    {
        return axios.get(POLICY_REST_API_URL);
    }

    updatePolicyHolder(policyHolder, vehicles)
    {
        return axios.put(POLICY_REST_API_URL,
            {
                policyholder_id: policyHolder.policyholder_id,
                vehicles: vehicles,
                firstName: policyHolder.firstName,
                lastName: policyHolder.lastName,
                address: policyHolder.address,
                zipcode: policyHolder.zipcode,
                city: policyHolder.city,
                state: policyHolder.state,
                phoneNumber: policyHolder.phoneNumber,
                email: policyHolder.email 
            });            
    }

    deletePolicyHolder()
    {

    }

    getPolicyHolder(id)
    {
        return axios.get(POLICY_REST_API_URL + id);
    }

    addPolicyHolder()
    {
        
    }
}

export default new PolicyService();