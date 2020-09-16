package tech.marzecki.prawojazdytracker.model;

import java.util.Date;
import java.util.UUID;

public class Lesson {
    private final UUID id;
    private final String name;
    private final UUID driverId;
    private final Date date;

    public Lesson(UUID id, String name, UUID driverId, Date date) {
        this.id = id;
        this.name = name;
        this.driverId = driverId;
        this.date = date;
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public UUID getDriverId() {
        return driverId;
    }

    public Date getDate() {
        return date;
    }
}
