package tech.marzecki.prawojazdytracker.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;
import tech.marzecki.prawojazdytracker.auth.ApplicationUser;
import tech.marzecki.prawojazdytracker.auth.ApplicationUserDetailsService;
import tech.marzecki.prawojazdytracker.service.VoteService;

import java.util.UUID;

@RestController
@RequestMapping("/userApi")
public class UserApiController {

    final ApplicationUserDetailsService applicationUserDetailsService;
    final VoteService voteService;

    @Autowired
    public UserApiController(ApplicationUserDetailsService applicationUserDetailsService, VoteService voteService){
        this.applicationUserDetailsService = applicationUserDetailsService;
        this.voteService = voteService;
    }

    @PostMapping("/register")
    public RedirectView registerUser(String username, String password){
        applicationUserDetailsService.registerUser(username, password);
        return new RedirectView("/website/login/index.html?status=registration");
    }

    @GetMapping("/deleteAccount")
    public RedirectView removeUser(){
        final ApplicationUser auth = (ApplicationUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        voteService.removeAllVotesOfUser(auth.getId());
        applicationUserDetailsService.removeUser(auth.getId());
        return new RedirectView("/website/login/index.html?status=delete");
    }

    @GetMapping("/findUser/{name}")
    public UUID findUser(@PathVariable("name") String name){
        return applicationUserDetailsService.findUserByUsername(name);
    }
}
