/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.washrequest;

import app.cleaner.Cleaner;
import app.customer.Customer;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 *
 * @author Felix
 */

@Entity //This tells Hibernate to make a table out of this class
@Table(name = "washRequest")
public class WashRequest {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Cleaner assignedCleaner;
    
    private Integer cleanerAccountId;
    
    @ManyToOne
    @JoinColumn
    @JsonIgnore
    private Customer customer;
    
    private Integer customerAccountId;

    @Column(name = "time")
    private String time;
    
    @Column(name = "carDetails")
    private CarDetails carDetails;
    
    @Column(name = "washType")
    private String washType;
    
    @Column(name = "status")
    private String status;
    
    @Column(name = "location")
    private Location location;
    
    public WashRequest() {}
    
    public Integer getCleanerAccountId() {
        return cleanerAccountId;
    }

    public void setCleanerAccountId(int cleanerAccountId) {
        this.cleanerAccountId = cleanerAccountId;
    }

    public Integer getCustomerAccountId() {
        return customerAccountId;
    }

    public void setCustomerAccountId(int customerAccountId) {
        this.customerAccountId = customerAccountId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Cleaner getAssignedCleaner() {
        return assignedCleaner;
    }

    public void setAssignedCleaner(Cleaner assignedCleaner) {
        this.assignedCleaner = assignedCleaner;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public CarDetails getCarDetails() {
        return carDetails;
    }

    public void setCarDetails(CarDetails carDetails) {
        this.carDetails = carDetails;
    }

    public String getWashType() {
        return washType;
    }

    public void setWashType(String washType) {
        this.washType = washType;
    }

    public String getStatus() {
        return status;
    }

    public void setWashStatus(String status) {
        this.status = status;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }
    
}
