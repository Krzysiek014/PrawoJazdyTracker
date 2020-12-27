package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tech.marzecki.prawojazdytracker.model.Vote;
import tech.marzecki.prawojazdytracker.service.VoteService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/voteApi")
public class VoteApiController {

    private final VoteService voteService;

    @Autowired
    public VoteApiController(VoteService voteService) {
        this.voteService = voteService;
    }

    @PostMapping("/getAllVotes")
    public List<Vote> getAllVotes(String lessonID){
        return voteService.getAllVotes(UUID.fromString(lessonID));
    }

    @PostMapping("/changeVote")
    public Boolean changeVote(String lessonID){
        return voteService.changeVote(UUID.fromString(lessonID));
    }

    @PostMapping("/doVoted")
    public Boolean doVoted(String lessonID){
        return voteService.doVoted(UUID.fromString(lessonID));
    }

    @PostMapping("/getVotesByUser")
    public List<Vote> getVotesByUser(String driverID){
        return voteService.getVotesByUser(UUID.fromString(driverID));
    }
}
