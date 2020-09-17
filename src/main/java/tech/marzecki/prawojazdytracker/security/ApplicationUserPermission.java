package tech.marzecki.prawojazdytracker.security;

public enum ApplicationUserPermission {
    LESSON_WRITE("lesson:write"),
    LESSON_READ("lesson:read"),
    LESSON_DELETE("lesson:delete"),
    MAP_POSITION_ADD("mapposition:add"),
    MAP_POSITION_DELETE("mapposition:delete");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}