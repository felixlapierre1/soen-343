/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.washrequest;

import app.InvalidIdException;
import app.cleaner.Cleaner;
import app.cleaner.CleanerRepository;
import app.customer.Customer;
import app.customer.CustomerRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Felix
 */
@RestController
public class WashRequestController {
    @Autowired
    private WashRequestRepository repository;
    
    @Autowired
    private CustomerRepository customerRep;
    
    @Autowired
    private CleanerRepository cleanerRep;
    
    @PostMapping("/request")
    public @ResponseBody WashRequest addNewWashRequest(
            @RequestBody WashRequest washRequest
    ) {
        validateCustomerId(washRequest);
        validateCleanerId(washRequest);
        
        repository.save(washRequest);
        return washRequest;
    }
    
    @PutMapping("/request")
    public @ResponseBody WashRequest updateRequest(
        @RequestBody WashRequest washRequest) {
        validateCustomerId(washRequest);
        validateCleanerId(washRequest);
        repository.save(washRequest);
        return washRequest;
    }
    
    @GetMapping("/request")
    public @ResponseBody WashRequest getWashRequestById(
            @RequestParam int id
    ) {
        Optional<WashRequest> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get();
        } else {
            throw new InvalidIdException("washRequest", id);
        }
    }
    
    @GetMapping("/request/all")
    public @ResponseBody List<WashRequest> getAllWashRequests()
    {
        return repository.findAll();
    }
    
    private void validateCustomerId(WashRequest req) {
        Integer customerAccountId = req.getCustomerAccountId();
        Optional<Customer> owner = customerRep.findById(customerAccountId);
        if(owner.isPresent()) {
            req.setCustomer(owner.get());
        } else {
            throw new InvalidIdException("customer", customerAccountId);
        }
    }
    
    private void validateCleanerId(WashRequest req) {
        Integer cleanerAccountId = req.getCleanerAccountId();
        if(cleanerAccountId != null) {
            Optional<Cleaner> assignedCleaner = cleanerRep.findById(cleanerAccountId);
            if(assignedCleaner.isPresent()) {
                req.setAssignedCleaner(assignedCleaner.get());
            } else {
                throw new InvalidIdException("cleaner", cleanerAccountId);
            }
        }
    }
}
