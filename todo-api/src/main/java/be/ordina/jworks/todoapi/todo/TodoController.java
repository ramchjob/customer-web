package be.ordina.jworks.todoapi.todo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = "application/json")
public class TodoController {

    @GetMapping(path= "/title")
    public ResponseEntity<String> getAllTodos() {
        String response = "{\"title\":\"hello\"}";
        return ResponseEntity.ok(response);
    }

    
}
