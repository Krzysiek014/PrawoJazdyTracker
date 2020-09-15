package tech.marzecki.prawojazdytracker.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/map")
public class MapArchiveController {

    @GetMapping("/all")
    public String getAllLessons(){
        // TODO implement method to get all lessons
        return "OK";
    }

    @PostMapping("/update")
    public boolean updateLesson(){
        // TODO implement method to update lesson
        return "OK";
    }
}
