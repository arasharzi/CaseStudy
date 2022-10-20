package com.example.casestudy.services;

import com.example.casestudy.entities.PolicyHolder;
import com.example.casestudy.repository.PolicyHolderDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
    public PolicyHolder getPolicyHolderById(int id)
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
}
