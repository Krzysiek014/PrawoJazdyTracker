package tech.marzecki.prawojazdytracker.auth;

import java.util.Optional;
import java.util.UUID;

public interface ApplicationUserDAO {

    Optional<ApplicationUser> selectApplicationUserByUsername(String username);

    int registerUser(UUID id, String username, String password);

    default int registerUser(String username, String password){
        final UUID id = UUID.randomUUID();
        return registerUser(id, username, password);
    }

}
