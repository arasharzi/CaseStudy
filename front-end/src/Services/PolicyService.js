import axios from 'axios'

const POLICY_REST_API_URL = 'http://localhost:8080/api/policy-holders/'
const AUTH = 'http://localhost:8080/api/auth/'

class PolicyService 
{ 
    getPolicyHolders()
    {
        return axios.get(POLICY_REST_API_URL, { withCredentials: true });
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
            }, { withCredentials: true });            
    }

    deletePolicyHolder()
    {

    }

    addPolicyHolder()
    {
        
    }

    getPolicyHolderByPolicy(policy)
    {
        return axios.get(POLICY_REST_API_URL + 'policy/' + policy, { withCredentials: true });
    }

    deleteVehicleById(policyHolder, vehicle_id)
    {
        return axios.delete(POLICY_REST_API_URL + policyHolder.policyholder_id + '/' + vehicle_id, { withCredentials: true });
    }

    getActiveClaims()
    {
        return axios.get(POLICY_REST_API_URL + 'active-claims', { withCredentials: true })
    }


    // AUTH RELATED FUNCITONS
    login(user, password)
    {   
        var token = `Basic ${this.base64(user + ':' + password)}`
        return axios.get(AUTH, 
            {
                withCredentials: true,
                Authorization: token
                // headers:
                // {
                //     'Authorization': token, 
                // }
            })
    }

    base64(str)
    {
        // TODO: deprecated.. oh well.
        return btoa(str)
    }
}

export default new PolicyService()