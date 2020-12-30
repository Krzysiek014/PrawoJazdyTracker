package tech.marzecki.prawojazdytracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.marzecki.prawojazdytracker.dao.LessonMapPositionDAO;
import tech.marzecki.prawojazdytracker.model.LessonMapPosition;

import java.util.List;
import java.util.UUID;

@Service
public class LessonMapPositionService {
    private final LessonMapPositionDAO lessonMapPositionDAO;

    @Autowired
    public LessonMapPositionService(LessonMapPositionDAO lessonMapPositionDAO) {
        this.lessonMapPositionDAO = lessonMapPositionDAO;
    }


    public int insertMapPosition(float longitude, float latitude, UUID lessonId){
        return lessonMapPositionDAO.insertMapPosition(longitude, latitude, lessonId);
    }

    public List<LessonMapPosition> getLessonMapPoints(UUID lessonId){
        return  lessonMapPositionDAO.getLessonMapPoints(lessonId);
    }

    public Boolean deleteAllLessonPoints(UUID lessonID){
        return lessonMapPositionDAO.deleteAllLessonPoints(lessonID);
    }
}
