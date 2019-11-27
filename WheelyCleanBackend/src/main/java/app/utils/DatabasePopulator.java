package app.utils;

import app.account.cleaner.Cleaner;
import app.account.cleaner.CleanerRepository;
import app.account.customer.Customer;
import app.account.customer.CustomerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Ensures that a cleaner and customer exist in the database.
 * @author Felix
 */
@Component("databasePopulator")
public class DatabasePopulator {
    @Autowired
    private CustomerRepository customers;
    
    @Autowired
    private CleanerRepository cleaners;
    
    public void ensureCustomerExists() {
        List<Customer> existingCustomers = customers.findAll();
        if(existingCustomers.isEmpty()) {
            customers.save(new Customer("TestCustomer"));
            customers.save(new Customer("Jeff"));
            customers.save(new Customer("Felix"));
        }
    }
    
    public void printExistingCustomers() {
        StringBuilder output = new StringBuilder();
        output.append("Existing customers in the database: ");
        customers.findAll().forEach((customer) -> {
            output.append(" " + customer.getId());
        });
        System.out.println(output.toString());
    }
    
    public void ensureCleanerExists() {
        List<Cleaner> existingCleaners = cleaners.findAll();
        if(existingCleaners.isEmpty()) {
            cleaners.save(new Cleaner("TestCleaner"));
            cleaners.save(new Cleaner("Bob"));
            cleaners.save(new Cleaner("Becky"));
        }
    }
    
    public void printExistingCleaners() {
        StringBuilder output = new StringBuilder();
        output.append("Existing cleaners in the database: ");
        cleaners.findAll().forEach((cleaner) -> {
            output.append(" " + cleaner.getId());
        });
        System.out.println(output.toString());
    }
}
