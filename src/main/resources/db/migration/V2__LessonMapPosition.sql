CREATE TABLE lessonmapposition(
    id UUID NOT NULL PRIMARY KEY,
    longitude DECIMAL NOT NULL,
    latitude DECIMAL NOT NULL,
    lessonId UUID NOT NULL,
    time TIME NOT NULL
)