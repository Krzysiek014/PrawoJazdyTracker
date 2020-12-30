package tech.marzecki.prawojazdytracker.dao;

import tech.marzecki.prawojazdytracker.model.LessonMapPosition;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface LessonMapPositionDAO {
    int insertMapPosition(float longitude, float latitude, UUID id, UUID lessonId, Date time);

    default int insertMapPosition(float longitude, float latitude, UUID lessonId){
        final UUID id = UUID.randomUUID();
        return insertMapPosition(longitude, latitude, id, lessonId, new Date());
    };

    List<LessonMapPosition> getLessonMapPoints(UUID lessonId);

    Boolean deleteAllLessonPoints(UUID lessonID);
}
