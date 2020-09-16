package tech.marzecki.prawojazdytracker.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import java.util.Date;
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
}
