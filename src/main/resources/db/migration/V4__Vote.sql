CREATE TABLE votes(
    id UUID NOT NULL PRIMARY KEY,
    userid UUID NOT NULL,
    lessonid UUID NOT NULL
)