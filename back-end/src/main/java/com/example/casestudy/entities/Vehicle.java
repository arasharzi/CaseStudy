package com.example.casestudy.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_vehicle")
public class Vehicle
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int vehicle_id;

    private String make;
    private String model;
    private String year;
    private String policy_number;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Claim> claims;

    public Vehicle()
    {

    }
    public Vehicle(int vehicle_id, String make, String model, String year, String policy_number, List<Claim> claims)
    {
        this.vehicle_id = vehicle_id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.policy_number = policy_number;
        this.claims = claims;
    }

    public int getVehicle_id()
    {
        return vehicle_id;
    }
    public void setVehicle_id(int vehicle_id)
    {
        this.vehicle_id = vehicle_id;
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

    public List<Claim> getClaims()
    {
        return claims;
    }
    public void setClaims(List<Claim> claims)
    {
        this.claims = claims;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "vehicle_id=" + vehicle_id +
                ", make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year='" + year + '\'' +
                ", policy_number='" + policy_number + '\'' +
                '}';
    }
}
