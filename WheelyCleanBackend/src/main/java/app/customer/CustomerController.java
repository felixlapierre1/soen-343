package app.customer;

import app.NoContentException;
import app.washrequest.WashRequest;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepository repository;
    
    @PostMapping("/customer")
    public @ResponseBody Customer addNewCustomer(@RequestParam String name) {
        Customer c = new Customer(name);
        repository.save(c);
        return c;
    }
    
    @GetMapping("/customer")
    public @ResponseBody Customer getCustomerById(@RequestParam int id) {
        Optional<Customer> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get();
        } else {
            throw new NoContentException(id);
        }
    }
    
    @GetMapping("/customer/all")
    public @ResponseBody List<Customer> getAllCustomers() {
        return repository.findAll();
    }
    
    @GetMapping("/customer/requests")
    public @ResponseBody List<WashRequest> getAllRequestsOfCustomer(@RequestParam int id) {
        Optional<Customer> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get().getRequests();
        } else {
            throw new NoContentException(id);
        }
    }
}
