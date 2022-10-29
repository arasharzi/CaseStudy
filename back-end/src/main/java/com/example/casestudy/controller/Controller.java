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

    @GetMapping("/policy-holders/policy/{id}")
    public PolicyHolder getPolicyHolderByPolicy(@PathVariable String id)
    {
        return this.policyHolder.getPolicyHolderByPolicy(id);
    }

    @GetMapping("/policy-holders/active-claims")
    public List<PolicyHolder> getActiveClaims()
    {
        return this.policyHolder.getActiveClaims();
    }


    // Adds
    @PostMapping("/policy-holders")
    public PolicyHolder addPolicyHolder(@RequestBody PolicyHolder policyHolder)
    {
        return this.policyHolder.addPolicyHolder(policyHolder);
    }


    // Updates
    @PutMapping("/policy-holders")
    public PolicyHolder updatePolicyHolder(@RequestBody PolicyHolder policyHolder)
    {
        return this.policyHolder.updatePolicyHolder(policyHolder);
    }


    // Deletes
    @DeleteMapping("/policy-holders/{id}")
    public String deletePolicyHolder(@PathVariable String id)
    {
        return this.policyHolder.deletePolicyHolderById(Integer.parseInt(id));
    }

    @DeleteMapping("/policy-holders/{id}/{vehicle_id}")
    public String deleteVehicle(@PathVariable String id, @PathVariable String vehicle_id)
    {
        return this.policyHolder.deleteVehicleById(Integer.parseInt(id), Integer.parseInt(vehicle_id));
    }


    // Login
    @GetMapping("/auth")
    public String login()
    {
        System.out.println("login attempted");
        return "OK";
    }

}
