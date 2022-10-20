package com.example.casestudy.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "tbl_policyholder")
public class PolicyHolder
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int policyholder_id;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Vehicle> vehicles;

    private String firstName;
    private String lastName;
    private String address;
    private int zipcode;
    private String state;
    private String phoneNumber;


    public PolicyHolder()
    {

    }
    public PolicyHolder(List<Vehicle> vehicles, String firstName, String lastName, String address, int zipcode, String state, String phoneNumber)
    {
        this.vehicles = vehicles;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.zipcode = zipcode;
        this.state = state;
        this.phoneNumber = phoneNumber;
    }

    public int getPolicyholder_id()
    {
        return policyholder_id;
    }
    public void setPolicyholder_id(int policyholder_id)
    {
        this.policyholder_id = policyholder_id;
    }

    public List<Vehicle> getVehicles()
    {
        return vehicles;
    }
    public void setVehicles(List<Vehicle> vehicles)
    {
        this.vehicles = vehicles;
    }

    public String getFirstName()
    {
        return firstName;
    }
    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }

    public String getAddress()
    {
        return address;
    }
    public void setAddress(String address)
    {
        this.address = address;
    }

    public int getZipcode()
    {
        return zipcode;
    }
    public void setZipcode(int zipcode)
    {
        this.zipcode = zipcode;
    }

    public String getState()
    {
        return state;
    }
    public void setState(String state)
    {
        this.state = state;
    }

    public String getPhoneNumber()
    {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber)
    {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "PolicyHolder{" +
                "policyholder_id=" + policyholder_id +
                ", vehicles=" + vehicles +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", address='" + address + '\'' +
                ", zipcode=" + zipcode +
                ", state='" + state + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                '}';
    }
}
