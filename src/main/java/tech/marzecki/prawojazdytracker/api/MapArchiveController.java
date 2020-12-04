package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import tech.marzecki.prawojazdytracker.auth.ApplicationUser;
import tech.marzecki.prawojazdytracker.model.Lesson;
import tech.marzecki.prawojazdytracker.model.LessonMapPosition;
import tech.marzecki.prawojazdytracker.service.LessonMapPositionService;
import tech.marzecki.prawojazdytracker.service.LessonService;

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


    @GetMapping("lessons")
    public List<Lesson> getUserLessons(){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return lessonService.getAllDriversLessons(auth.getId());
    }

    @GetMapping("lessons/{id}")
    public List<Lesson> getOtherUsersLessons(@PathVariable("id") String id){
        return lessonService.getAllDriversLessons(UUID.fromString(id));
    }

    @PostMapping("/add")
    public boolean addLesson(String name){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        lessonService.insertLesson(name, auth.getId(), new Date());
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

    @GetMapping("/lesson/delete/{id}")
    public int deleteUsersLesson(@PathVariable("id") String id){
        return lessonService.deleteLesson(UUID.fromString(id));
    }
}
