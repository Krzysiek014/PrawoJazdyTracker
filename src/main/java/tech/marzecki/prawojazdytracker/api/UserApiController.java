package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import tech.marzecki.prawojazdytracker.auth.ApplicationUser;
import tech.marzecki.prawojazdytracker.auth.ApplicationUserDetailsService;

import java.util.UUID;

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
        return new RedirectView("/website/login/index.html?status=registration");
    }

    @GetMapping("/deleteAccount")
    public RedirectView removeUser(){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        applicationUserDetailsService.removeUser(auth.getId());
        return new RedirectView("/website/login/index.html?status=delete");
    }

    @GetMapping("/findUser/{name}")
    public UUID findUser(@PathVariable("name") String name){
        return applicationUserDetailsService.findUserByUsername(name);
    }
}
