package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;
import tech.marzecki.prawojazdytracker.auth.ApplicationUserDetailsService;

@RestController
@RequestMapping("/userApi")
public class UserApiController {

    final ApplicationUserDetailsService applicationUserDetailsService;

    @Autowired
    public UserApiController(ApplicationUserDetailsService applicationUserDetailsService){
        this.applicationUserDetailsService = applicationUserDetailsService;
    }

    @PostMapping("/register")
    public RedirectView registerUser(String username, String password){
        applicationUserDetailsService.registerUser(username, password);
        return new RedirectView("/website/login/index.html");
    }
}
