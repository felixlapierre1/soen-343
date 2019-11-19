package app;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NO_CONTENT)
public class NoContentException extends RuntimeException {
    public NoContentException(String table, int id) {
        super("No " + table + " found with ID " + id);
    }
}
