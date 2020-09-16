package tech.marzecki.prawojazdytracker.model;

import java.util.Date;
import java.util.UUID;

public class LessonMapPosition {
    private final float longitude;
    private final float latitude;
    private final UUID id;
    private final UUID lessonId;
    private final Date time;

    public LessonMapPosition(float longitude, float latitude, UUID id, UUID lessonId, Date time) {
        this.longitude = longitude;
        this.latitude = latitude;
        this.id = id;
        this.lessonId = lessonId;
        this.time = time;
    }

    public float getLongitude() {
        return longitude;
    }

    public float getLatitude() {
        return latitude;
    }

    public UUID getId() {
        return id;
    }

    public UUID getLessonId() {
        return lessonId;
    }

    public Date getTime() {
        return time;
    }
}
