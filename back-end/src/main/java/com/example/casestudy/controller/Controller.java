package com.example.casestudy.controller;

import com.example.casestudy.entities.PolicyHolder;
import com.example.casestudy.services.IPolicyHolderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"}, allowCredentials = "true")
public class Controller
{
    @Autowired
    private IPolicyHolderService policyHolder;

    // Gets
    @GetMapping("/")
    public String homePage()
    {
        return null;
    }

    @GetMapping("/policy-holders")
    public List<PolicyHolder> getAllPolicyHolders()
    {
        return this.policyHolder.getPolicyHolders();
    }

    @GetMapping("/policy-holders/{id}")
    public PolicyHolder getPolicyHolderById(@PathVariable String id)
    {
        return this.policyHolder.getPolicyHolderById(Integer.parseInt(id));
    }

    // Adds
    @PostMapping("/policy-holders")
    public PolicyHolder addPolicyHolder(@RequestBody PolicyHolder policyHolder)
    {
        return this.policyHolder.addPolicyHolder(policyHolder);
    }
    // TODO: add vehicle to policy holder?

    // Updates
    @PutMapping("/policy-holders")
    public PolicyHolder updatePolicyHolder(@RequestBody PolicyHolder policyHolder)
    {
        return this.policyHolder.updatePolicyHolder(policyHolder);
    }
    // TODO: update vehicle info for policy holder

    // Deletes
    @DeleteMapping("/policy-holders/{id}")
    public String deletePolicyHolder(@PathVariable String id)
    {
        return this.policyHolder.deletePolicyHolderById(Integer.parseInt(id));
    }
    // TODO: delete vehicle info for policy holder


    // Mapping for file handling
    // Gets
    @GetMapping("/policy-holder/{id}/files")
    public String getPolicyHolderClaim()
    {
        return "";
    }

    // Adds
    @PostMapping("/policy-holders/{id}/files")
    public String uploadPolicyHolderClaim()
    {
        return "";
    }


}
