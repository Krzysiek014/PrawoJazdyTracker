package tech.marzecki.prawojazdytracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import tech.marzecki.prawojazdytracker.dao.LessonDAO;
import tech.marzecki.prawojazdytracker.model.Lesson;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
public class LessonService {

    private final LessonDAO lessonDAO;

    @Autowired
    public LessonService(@Qualifier("postgres") LessonDAO lessonDAO) {
        this.lessonDAO = lessonDAO;
    }

    public int insertLesson(String name, UUID driverId, Date date){
        return lessonDAO.insertLesson(name, driverId, date);
    }

    public List<Lesson> getAllDriversLessons(UUID driverID){
        return lessonDAO.getAllDriversLessons(driverID);
    }
}
