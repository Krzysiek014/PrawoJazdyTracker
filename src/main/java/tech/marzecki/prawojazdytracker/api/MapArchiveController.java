package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import tech.marzecki.prawojazdytracker.auth.ApplicationUser;
import tech.marzecki.prawojazdytracker.model.Lesson;
import tech.marzecki.prawojazdytracker.model.LessonMapPosition;
import tech.marzecki.prawojazdytracker.service.LessonMapPositionService;
import tech.marzecki.prawojazdytracker.service.LessonService;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/map")
public class MapArchiveController {

    final UserApiController userApiController;
    final LessonService lessonService;
    final LessonMapPositionService lessonMapPositionService;

    @Autowired
    public MapArchiveController(UserApiController userApiController, LessonService lessonService, LessonMapPositionService lessonMapPositionService) {
        this.userApiController = userApiController;
        this.lessonService = lessonService;
        this.lessonMapPositionService = lessonMapPositionService;
    }


    @GetMapping("lessons")
    public List<Lesson> getUserLessons(){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return lessonService.getAllDriversLessons(auth.getId());
    }

    @GetMapping("lessons/{name}")
    public List<Lesson> getOtherUsersLessons(@PathVariable("name") String name){
        UUID userID = userApiController.findUser(name);
        return userID!=null ? lessonService.getAllDriversLessons(userID) : new LinkedList();
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
    public Lesson getLessonDetails(@PathVariable("id") String lessonId){
        return lessonService.getLessonDetails(UUID.fromString(lessonId));
    }

    @GetMapping("/lesson/{id}/points")
    public List<LessonMapPosition> getLessonMapPoints(@PathVariable("id") String lessonId){
        return lessonMapPositionService.getLessonMapPoints(UUID.fromString(lessonId));
    }

    @GetMapping("/lesson/delete/{id}")
    public int deleteUsersLesson(@PathVariable("id") String id){
        lessonMapPositionService.deleteAllLessonPoints(UUID.fromString(id));
        return lessonService.deleteLesson(UUID.fromString(id));
    }

    @GetMapping("/lesson/deleteAll")
    public RedirectView deleteAllLessons(){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        for (Lesson l:lessonService.getAllDriversLessons(auth.getId()))
            lessonMapPositionService.deleteAllLessonPoints(l.getId());

        lessonService.deleteAllLessons(auth.getId());
        return new RedirectView("/website/home/index.html?status=deleteAll");
    }
}
