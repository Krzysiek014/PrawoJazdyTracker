package tech.marzecki.prawojazdytracker.mvc;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@Configuration
public class MvcConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        System.out.println("SAF");
        registry.addResourceHandler("/static/**").addResourceLocations("file:/home/krzysztofm/PROJEKTY/PRAWOJAZDY/PrawoJazdyTracker/src/main/website/build/static/");
        registry.addResourceHandler("/*.json").addResourceLocations("file:/home/krzysztofm/PROJEKTY/PRAWOJAZDY/PrawoJazdyTracker/src/main/website/build/");
        registry.addResourceHandler("/*.ico").addResourceLocations("file:/home/krzysztofm/PROJEKTY/PRAWOJAZDY/PrawoJazdyTracker/src/main/website/build/static/");
        registry.addResourceHandler("/website/lesson/**/index*", "/website/settings/index*", "/website/login/index*", "/website/register/index*", "/website/home/index*").addResourceLocations("file:/home/krzysztofm/PROJEKTY/PRAWOJAZDY/PrawoJazdyTracker/src/main/website/build/index.html");
    }
}
