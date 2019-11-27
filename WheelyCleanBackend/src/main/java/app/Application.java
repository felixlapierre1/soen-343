package app;

import app.utils.DatabasePopulator;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

    @Autowired
    private DatabasePopulator databasePopulator;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @PostConstruct
    public void init() {
        databasePopulator.ensureCleanerExists();
        databasePopulator.ensureCustomerExists();
        databasePopulator.printExistingCleaners();
        databasePopulator.printExistingCustomers();
    }
}
