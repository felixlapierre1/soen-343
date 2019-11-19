package app.cleaner;

import app.NoContentException;
import app.cleaner.Cleaner;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import app.washrequest.WashRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CleanerController {
    @Autowired
    private CleanerRepository repository;
    
    @PostMapping("/cleaner")
    public @ResponseBody Cleaner addNewCleaner(@RequestParam String name) {
        Cleaner c = new Cleaner(name);
        repository.save(c);
        return c;
    }
    
    @GetMapping("/cleaner")
    public @ResponseBody Cleaner getCleanerById(@RequestParam int id) {
        Optional<Cleaner> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get();
        } else {
            throw new NoContentException("cleaner", id);
        }
    }

    @GetMapping("/cleaner/all")
    public @ResponseBody List<Cleaner> getAllCleaners() {
       return repository.findAll();
    }

    @GetMapping("/cleaner/requests")
    public @ResponseBody Set<WashRequest> getRequests(@RequestParam int id) {
        Optional<Cleaner> result = repository.findById(id);
        if(result.isPresent()) {
            return result.get().getRequests();
        } else {
            throw new NoContentException("cleaner", id);
        }
    }
}
