/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.washrequest;

import app.NoContentException;
import app.cleaner.Cleaner;
import app.cleaner.CleanerRepository;
import app.customer.Customer;
import app.customer.CustomerRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
        WashRequest req = washRequest;
        Integer customerAccountId = washRequest.getCustomerAccountId();
        Integer cleanerAccountId = washRequest.getCleanerAccountId();
        
        Optional<Customer> owner = customerRep.findById(customerAccountId);
        if(owner.isPresent()) {
            req.setCustomer(owner.get());
        } else {
            //TODO: Is this the right exception to throw?
            throw new NoContentException("customer", customerAccountId);
        }
        
        if(cleanerAccountId != null) {
            Optional<Cleaner> assignedCleaner = cleanerRep.findById(cleanerAccountId);
            if(assignedCleaner.isPresent()) {
                req.setAssignedCleaner(assignedCleaner.get());
            } else {
                throw new NoContentException("cleaner", cleanerAccountId);
            }
        }
        
        repository.save(req);
        return req;
    }
}
