package tech.marzecki.prawojazdytracker.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import tech.marzecki.prawojazdytracker.model.Lesson;
import tech.marzecki.prawojazdytracker.model.Vote;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("postgres-vote")
public class PostgresVoteAccessService implements VoteDAO{

    final JdbcTemplate jdbcTemplate;

    @Autowired
    public PostgresVoteAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Vote> getAllVotes(UUID lessonID) {
        String query = String.format("SELECT * FROM votes WHERE lessonid = '%s'", lessonID);
        List<Vote> result = jdbcTemplate.query(query, (resultSet,i) ->
                new Vote(
                        UUID.fromString(resultSet.getString("id")),
                        UUID.fromString(resultSet.getString("userid")),
                        UUID.fromString(resultSet.getString("lessonid"))
                )
        );
        return result;
    }

    @Override
    public Boolean addVote(UUID lessonID, UUID driverID) {
        String query = String.format("INSERT INTO votes VALUES('%s','%s','%s');", UUID.randomUUID(), driverID, lessonID);
        jdbcTemplate.update(query);
        return true;
    }

    @Override
    public Boolean removeVote(UUID lessonID, UUID driverID) {
        String query = String.format("DELETE FROM votes WHERE userid = '%s' AND lessonid = '%s'", driverID, lessonID);
        jdbcTemplate.update(query);
        return false;
    }

    @Override
    public Boolean doVoted(UUID lessonID, UUID driverID) {
        String query = String.format("SELECT * FROM votes WHERE userid = '%s' AND lessonid = '%s'", driverID, lessonID);
        List<Vote> result = jdbcTemplate.query(query, (resultSet,i) ->
                new Vote(
                        UUID.fromString(resultSet.getString("id")),
                        UUID.fromString(resultSet.getString("userid")),
                        UUID.fromString(resultSet.getString("lessonid"))
                )
        );
        return result.size()>0;
    }

    @Override
    public List<Vote> getVotesByUser(UUID driverID) {
        String query = String.format("SELECT * FROM votes WHERE userid = '%s'", driverID);
        List<Vote> result = jdbcTemplate.query(query, (resultSet,i) ->
                new Vote(
                        UUID.fromString(resultSet.getString("id")),
                        UUID.fromString(resultSet.getString("userid")),
                        UUID.fromString(resultSet.getString("lessonid"))
                )
        );
        return result;
    }

    @Override
    public Boolean removeAllVotesOfUser(UUID driverID) {
        String query = String.format("DELETE FROM votes WHERE userid = '%s'", driverID);
        jdbcTemplate.update(query);
        return true;
    }
}
