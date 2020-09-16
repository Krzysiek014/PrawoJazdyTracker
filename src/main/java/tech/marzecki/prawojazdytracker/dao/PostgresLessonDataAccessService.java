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
        System.out.println(query);
        return jdbcTemplate.query(query, (resultSet,i) ->{
            Date date = new Date();
            try {
                date = new SimpleDateFormat("yyyy-mm-dd").parse(resultSet.getString("date"));
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
        return 0;
    }
}
