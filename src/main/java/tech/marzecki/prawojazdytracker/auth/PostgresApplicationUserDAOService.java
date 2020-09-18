package tech.marzecki.prawojazdytracker.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import tech.marzecki.prawojazdytracker.security.ApplicationUserRole;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class PostgresApplicationUserDAOService implements ApplicationUserDAO{

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public PostgresApplicationUserDAOService(JdbcTemplate jdbcTemplate, PasswordEncoder passwordEncoder) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {
        String query = "SELECT * FROM users";
        List<ApplicationUser> applicationUserList = jdbcTemplate.query(query, ((resultSet, i) -> new ApplicationUser(
                ApplicationUserRole.valueOf(resultSet.getString("accounttype")).getGrantedAuthorities(),
                resultSet.getString("password"),
                resultSet.getString("username"),
                resultSet.getBoolean("isaccountnonexpired"),
                resultSet.getBoolean("isaccountnonlocked"),
                resultSet.getBoolean("iscredentialsnonexpired"),
                resultSet.getBoolean("isenabled"),
                UUID.fromString(resultSet.getString("id")))));
        return applicationUserList
                .stream()
                .filter(a -> a.getUsername().equals(username))
                .findFirst();
    }
}