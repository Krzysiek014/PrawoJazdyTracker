package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.marzecki.prawojazdytracker.model.Lesson;
import tech.marzecki.prawojazdytracker.service.LessonService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/map")
public class MapArchiveController {

    final LessonService lessonService;

    @Autowired
    public MapArchiveController(LessonService lessonService) {
        this.lessonService = lessonService;
    }


    @GetMapping("/all/{id}")
    public List<Lesson> getAllLessons(@PathVariable("id") String id){
        return lessonService.getAllDriversLessons(UUID.fromString(id));
    }

    @PostMapping("/update")
    public boolean updateLesson(){
        // TODO implement method to update lesson
        return true;
    }
}
