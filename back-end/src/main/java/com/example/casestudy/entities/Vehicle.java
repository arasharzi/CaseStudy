package com.example.casestudy.entities;

import com.sun.istack.NotNull;
import javax.persistence.*;

@Entity
@Table(name = "tbl_vehicle")
public class Vehicle
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vehicle_id;

    @ManyToOne
    @JoinColumn(name = "policyholder_id", nullable = false)
    private PolicyHolder policyHolder;

    private String make;
    private String model;
    private String year;
    private String policy_number;

    @NotNull
    private boolean isClaim;
    private boolean isClaimApproved;


/*
    public Vehicle(int vehicle_id, PolicyHolder policyHolder, String make, String model, String year, String policy_number, boolean isClaim)
    {
        this.vehicle_id = vehicle_id;
        this.policyHolder = policyHolder;
        this.make = make;
        this.model = model;
        this.year = year;
        this.policy_number = policy_number;
        this.isClaim = isClaim;
    }
*/

    public int getVehicle_id()
    {
        return vehicle_id;
    }
    public void setVehicle_id(int vehicle_id)
    {
        this.vehicle_id = vehicle_id;
    }

    public PolicyHolder getPolicyHolder()
    {
        return policyHolder;
    }
    public void setPolicyHolder(PolicyHolder policyHolder)
    {
        this.policyHolder = policyHolder;
    }

    public String getMake()
    {
        return make;
    }
    public void setMake(String make)
    {
        this.make = make;
    }

    public String getModel()
    {
        return model;
    }
    public void setModel(String model)
    {
        this.model = model;
    }

    public String getYear()
    {
        return year;
    }
    public void setYear(String year)
    {
        this.year = year;
    }

    public String getPolicy_number()
    {
        return policy_number;
    }
    public void setPolicy_number(String policy_number)
    {
        this.policy_number = policy_number;
    }

    public boolean isClaim()
    {
        return isClaim;
    }
    public void setClaim(boolean claim)
    {
        isClaim = claim;
    }

    public boolean isClaimApproved()
    {
        return isClaimApproved;
    }
    public void setClaimApproved(boolean claimApproved)
    {
        isClaimApproved = claimApproved;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "vehicle_id=" + vehicle_id +
                ", policyHolder=" + policyHolder +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year='" + year + '\'' +
                ", policy_number='" + policy_number + '\'' +
                ", isClaim=" + isClaim +
                ", isClaimApproved=" + isClaimApproved +
                '}';
    }
}
