package tech.marzecki.prawojazdytracker.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tech.marzecki.prawojazdytracker.model.Lesson;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository("postgres")
public class PostgresLessonDataAccessService implements LessonDAO{
    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PostgresLessonDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Lesson> getAllDriversLessons(UUID driverID) {
        final String query = String.format("SELECT * FROM lesson WHERE driverID = '%s'", driverID.toString());
        return jdbcTemplate.query(query, (resultSet,i) ->{
            Date date = new Date();
            try {
                date = new SimpleDateFormat("yyyy-MM-dd").parse(resultSet.getString("date"));
            } catch (ParseException e) {
                e.printStackTrace();
            }
        return new Lesson(
                    UUID.fromString(resultSet.getString("id")),
                    resultSet.getString("name"),
                    UUID.fromString(resultSet.getString("driverId")),
                    date);
        });
    }

    @Override
    public int insertLesson(UUID id, String name, UUID driverId, Date date) {
        final String query = String.format("INSERT INTO lesson (id, name, driverId, date) VALUES ('%s','%s','%s','%s')", id.toString(), name, driverId.toString(), new SimpleDateFormat("yyyy-MM-dd").format(date));
        jdbcTemplate.update(query);
        return 1;
    }

    @Override
    public int deleteLesson(UUID id) {
        final String query = String.format("DELETE FROM lesson WHERE id = '%s'", id.toString());
        jdbcTemplate.update(query);
        return 1;
    }

    @Override
    public int deleteAllLessons(UUID id) {
        final String query = String.format("DELETE FROM lesson WHERE driverid = '%s'", id.toString());
        jdbcTemplate.update(query);
        return 1;
    }
}
