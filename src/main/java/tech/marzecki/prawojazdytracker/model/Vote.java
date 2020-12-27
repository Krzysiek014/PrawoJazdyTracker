package tech.marzecki.prawojazdytracker.model;

import java.util.UUID;

public class Vote {
    private final UUID voteID;
    private final UUID lessonID;
    private final UUID driverID;

    public Vote(UUID voteID, UUID driverID, UUID lessonID) {
        this.voteID = voteID;
        this.lessonID = lessonID;
        this.driverID = driverID;
    }

    public UUID getVoteID() {
        return voteID;
    }

    public UUID getLessonID() {
        return lessonID;
    }

    public UUID getDriverID() {
        return driverID;
    }
}
