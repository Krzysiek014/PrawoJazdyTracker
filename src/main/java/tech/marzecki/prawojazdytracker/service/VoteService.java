package tech.marzecki.prawojazdytracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import tech.marzecki.prawojazdytracker.auth.ApplicationUser;
import tech.marzecki.prawojazdytracker.dao.VoteDAO;
import tech.marzecki.prawojazdytracker.model.Vote;

import java.util.List;
import java.util.UUID;

@Service
public class VoteService {
    private final VoteDAO voteDAO;

    @Autowired
    public VoteService(VoteDAO voteDAO) {
        this.voteDAO = voteDAO;
    }

    public List<Vote> getAllVotes(UUID lessonID){
        return voteDAO.getAllVotes(lessonID);
    }

    public Boolean changeVote(UUID lessonID){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Boolean doVoted = voteDAO.doVoted(lessonID, auth.getId());
        return doVoted ? voteDAO.removeVote(lessonID, auth.getId()) : voteDAO.addVote(lessonID, auth.getId());
    }

    public Boolean doVoted(UUID lessonID){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return voteDAO.doVoted(lessonID, auth.getId());
    }

    public List<Vote> getVotesByUser(UUID driverID){
        return voteDAO.getVotesByUser(driverID);
    }
}
