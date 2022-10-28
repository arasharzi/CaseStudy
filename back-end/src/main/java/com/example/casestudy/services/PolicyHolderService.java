package com.example.casestudy.services;

import com.example.casestudy.entities.PolicyHolder;
import com.example.casestudy.entities.Vehicle;
import com.example.casestudy.entities.Claim;
import com.example.casestudy.repository.PolicyHolderDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;
import java.util.Optional;

@Service
public class PolicyHolderService implements IPolicyHolderService
{
    @Autowired
    private PolicyHolderDAO policyHolderDAO;


    @Override
    public List<PolicyHolder> getPolicyHolders()
    {
        return this.policyHolderDAO.findAll();
    }

    @Override
    public PolicyHolder getPolicyHolderById(int id) //TODO: Bug where it's repeating vehicles x times where x is number of claims on vehicle
    {
        Optional<PolicyHolder> policyHolder = this.policyHolderDAO.findById(id);
        PolicyHolder record = null;
        if (policyHolder.isPresent())
        {
            record = policyHolder.get();
        }
        return record;
    }

    @Override
    public PolicyHolder addPolicyHolder(PolicyHolder policyHolder)
    {
        return this.policyHolderDAO.save(policyHolder);
    }

    @Override
    public PolicyHolder updatePolicyHolder(PolicyHolder policyHolder)
    {
        return this.policyHolderDAO.save(policyHolder);
    }

    @Override
    public String deletePolicyHolderById(int id)
    {
        Optional<PolicyHolder> policyHolder = this.policyHolderDAO.findById(id);
        if (policyHolder.isPresent())
        {
            this.policyHolderDAO.deleteById(id);
            return "Policy holder deleted.";
        }
        return "Policy holder not found.";
    }

    @Override
    public String deleteVehicleById(int policy_id, int vehicle_id)
    {
        Optional<PolicyHolder> policyHolder = this.policyHolderDAO.findById(policy_id);
        if (policyHolder.isPresent())
        {
            PolicyHolder record = policyHolder.get();
            ListIterator<Vehicle> iter = record.getVehicles().listIterator();
            while (iter.hasNext())
            {
                if (iter.next().getVehicle_id() == vehicle_id)
                {
                    iter.remove();
                    updatePolicyHolder(record);
                    return "Vehicle deleted";
                }
            }
        }
        return "Vehicle not found";
    }

    @Override
    public PolicyHolder getPolicyHolderByPolicy(String policy_id)
    {
        List<PolicyHolder> records = this.policyHolderDAO.findAll();

        for (PolicyHolder p : records)
        {
            for (Vehicle v : p.getVehicles())
            {
                if (v.getPolicy_number().equals(policy_id))
                {
                    return p;
                }
            }
        }
        return null;
    }

    @Override
    public List<PolicyHolder> getActiveClaims()
    {
        List<PolicyHolder> records = this.policyHolderDAO.findAll();
        List<PolicyHolder> result = new ArrayList<>();

        for (PolicyHolder p : records)
        {
            for (Vehicle v : p.getVehicles())
            {
                for (Claim c : v.getClaims())
                {
                    if (!c.isClosed() && !result.contains(p))
                    {
                        result.add(p);
                    }
                }
            }
        }
        return result;
    }


}
