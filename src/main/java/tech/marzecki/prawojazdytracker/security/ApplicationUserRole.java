package tech.marzecki.prawojazdytracker.security;

import com.google.common.collect.Sets;

import java.util.Set;

import static tech.marzecki.prawojazdytracker.security.ApplicationUserPermission.*;

public enum ApplicationUserRole {
    GUEST(Sets.newHashSet()),
    DRIVER(Sets.newHashSet(LESSON_WRITE, LESSON_READ, MAP_POSITION_ADD)),
    ADMIN(Sets.newHashSet(LESSON_WRITE, LESSON_READ, LESSON_DELETE, MAP_POSITION_ADD, MAP_POSITION_DELETE));

    private final Set<ApplicationUserPermission> permissions;

    ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }
}