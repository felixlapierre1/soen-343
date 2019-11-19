package app;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class InvalidIdException extends RuntimeException {
    public InvalidIdException(String objectType, int id) {
        super("No " + objectType + " found with ID " + id);
    }
}
