package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.marzecki.prawojazdytracker.model.Lesson;
import tech.marzecki.prawojazdytracker.model.LessonMapPosition;
import tech.marzecki.prawojazdytracker.service.LessonMapPositionService;
import tech.marzecki.prawojazdytracker.service.LessonService;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/map")
public class MapArchiveController {

    final LessonService lessonService;
    final LessonMapPositionService lessonMapPositionService;

    @Autowired
    public MapArchiveController(LessonService lessonService, LessonMapPositionService lessonMapPositionService) {
        this.lessonService = lessonService;
        this.lessonMapPositionService = lessonMapPositionService;
    }


    @GetMapping("/all/{id}")
    public List<Lesson> getAllLessons(@PathVariable("id") String id){
        return lessonService.getAllDriversLessons(UUID.fromString(id));
    }

    @PostMapping("/add")
    public boolean addLesson(String name, String driverId){
        lessonService.insertLesson(name, UUID.fromString(driverId), new Date());
        return true;
    }

    @PostMapping("/update")
    public boolean updateLesson(String lessonId, float lng, float lat){
        lessonMapPositionService.insertMapPosition(lng, lat, UUID.fromString(lessonId));
        return true;
    }

    @GetMapping("/lesson/{id}")
    public List<LessonMapPosition> getLessonMapPoints(@PathVariable("id") String lessonId){
        return lessonMapPositionService.getLessonMapPoints(UUID.fromString(lessonId));
    }
}
