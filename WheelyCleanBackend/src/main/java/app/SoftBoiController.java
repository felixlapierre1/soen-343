package app;

import app.db.SoftBoi;
import app.db.SoftBoiRepository;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * Test for database interaction.
 *
 * @author Felix
 */
@RestController
public class SoftBoiController {

    @Autowired
    private SoftBoiRepository repository;
    
    @GetMapping("/bulkcreate")
    public String bulkcreate() {
        // Save a single soft boi
        repository.save(new SoftBoi("Nubb"));
        
        repository.saveAll(Arrays.asList(new SoftBoi("Mochi"), new SoftBoi("Egg"), new SoftBoi("Nibb"), new SoftBoi("Nibblett")));
    
        return "Softbois have been created";
    }
    
    @PostMapping("/create")
    public @ResponseBody
    SoftBoi addNewUser(@RequestParam String name) {
        SoftBoi n = new SoftBoi(name);
        repository.save(n);
        return n;
    }
    
    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<SoftBoi> getAllUSers() {
        // This returns a JSON or XML with all the users
        return repository.findAll();
    }
}
