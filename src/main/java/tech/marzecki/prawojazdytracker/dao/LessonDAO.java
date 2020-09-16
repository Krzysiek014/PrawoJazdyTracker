package tech.marzecki.prawojazdytracker.dao;

import tech.marzecki.prawojazdytracker.model.Lesson;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface LessonDAO {

    List<Lesson> getAllDriversLessons(UUID driverID);

    int insertLesson(UUID id, String name, UUID driverId, Date date);

    default int insertLesson(String name, UUID driverId, Date date){
        UUID id = UUID.randomUUID();
        return insertLesson(id, name, driverId, date);

    }

}
