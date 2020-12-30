package tech.marzecki.prawojazdytracker.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tech.marzecki.prawojazdytracker.model.LessonMapPosition;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository("postgres-mapEntries")
public class PostgresLessonMapPositionAccessService implements LessonMapPositionDAO{
    final JdbcTemplate jdbcTemplate;

    @Autowired
    public PostgresLessonMapPositionAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int insertMapPosition(float longitude, float latitude, UUID id, UUID lessonId, Date time) {
        final String query = String.format("INSERT INTO lessonmapposition (id,longitude,latitude,lessonId,time) VALUES ('%s', %s, %s, '%s', '%s')",id.toString(), longitude, latitude, lessonId.toString(), new SimpleDateFormat("HH:mm:ss").format(time));
        jdbcTemplate.update(query);
        return 1;
    }

    @Override
    public List<LessonMapPosition> getLessonMapPoints(UUID lessonId) {
        final String query = String.format("SELECT * FROM lessonmapposition WHERE lessonId = '%s'", lessonId.toString());
        return jdbcTemplate.query(query, (resultSet, i) -> {
            Date time = new Date();
            try {
                time = new SimpleDateFormat("HH:mm:ss").parse(resultSet.getString("time"));
            } catch (ParseException e) {
                e.printStackTrace();
            }
            return new LessonMapPosition(resultSet.getFloat("longitude"), resultSet.getFloat("latitude"), UUID.fromString(resultSet.getString("id")), UUID.fromString(resultSet.getString("lessonId")), time);
        });
    }

    @Override
    public Boolean deleteAllLessonPoints(UUID lessonID) {
        final String query = String.format("DELETE FROM lessonmapposition WHERE lessonid = '%s'", lessonID.toString());
        jdbcTemplate.update(query);
        return true;
    }
}
