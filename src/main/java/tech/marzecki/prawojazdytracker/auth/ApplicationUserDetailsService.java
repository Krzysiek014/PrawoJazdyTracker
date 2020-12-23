package tech.marzecki.prawojazdytracker.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ApplicationUserDetailsService implements UserDetailsService {

    private final ApplicationUserDAO applicationUserDAO;

    @Autowired
    public ApplicationUserDetailsService(ApplicationUserDAO applicationUserDAO) {
        this.applicationUserDAO = applicationUserDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return applicationUserDAO.selectApplicationUserByUsername(s).orElseThrow(() -> new UsernameNotFoundException("Username not in DB"));
    }

    public UUID findUserByUsername(String s) throws UsernameNotFoundException {
        return applicationUserDAO.findUserByUsername(s).orElse(null);
    }

    public int registerUser(String username, String password) {
        return applicationUserDAO.registerUser(username, password);
    }

    public int removeUser(UUID id){
        return applicationUserDAO.removeUser(id);
    }
}
