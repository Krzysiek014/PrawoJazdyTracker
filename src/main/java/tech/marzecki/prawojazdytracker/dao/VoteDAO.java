package tech.marzecki.prawojazdytracker.dao;

import tech.marzecki.prawojazdytracker.model.Vote;

import java.util.List;
import java.util.UUID;

public interface VoteDAO {

    List<Vote> getAllVotes(UUID lessonID);

    Boolean addVote(UUID lessonID, UUID driverID);

    Boolean removeVote(UUID lessonID, UUID driverID);

    Boolean doVoted(UUID lessonID, UUID driverID);

    List<Vote> getVotesByUser(UUID driverID);

    Boolean removeAllVotesOfUser(UUID driverID);

}
