package tech.marzecki.prawojazdytracker.dao;

import java.util.Date;
import java.util.UUID;

public interface LessonMapPositionDAO {
    int insertMapPosition(float longitude, float latitude, UUID id, UUID lessonId, Date time);

    default int insertMapPosition(float longitude, float latitude, UUID lessonId){
        final UUID id = UUID.randomUUID();
        return insertMapPosition(longitude, latitude, id, lessonId, new Date());
    };
}
