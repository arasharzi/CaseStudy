package com.example.casestudy.services;

import com.example.casestudy.entities.PolicyHolder;
import java.util.List;

public interface IPolicyHolderService
{
    List<PolicyHolder> getPolicyHolders();
    PolicyHolder getPolicyHolderById(int id);
    PolicyHolder addPolicyHolder(PolicyHolder policyHolder);
    PolicyHolder updatePolicyHolder(PolicyHolder policyHolder);
    String deletePolicyHolderById(int id);

    // TODO: add more?
    // add vehicles?
    // add policies to vehicles?
    // get policy holder by vehicle policy?
}
