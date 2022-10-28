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

    addPolicyHolder()
    {
        
    }

    getPolicyHolder(id)
    {
        return axios.get(POLICY_REST_API_URL + id);
    }

    getPolicyHolderByPolicy(policy)
    {
        return axios.get(POLICY_REST_API_URL + 'policy/' + policy);
    }

    deleteVehicleById(policyHolder, vehicle_id)
    {
        return axios.delete(POLICY_REST_API_URL + policyHolder.policyholder_id + '/' + vehicle_id);
    }

    getActiveClaims()
    {
        return axios.get(POLICY_REST_API_URL + 'active-claims')
    }

}

export default new PolicyService();