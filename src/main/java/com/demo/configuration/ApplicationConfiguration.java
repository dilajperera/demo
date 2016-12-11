package com.demo.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.accept.ContentNegotiationManager;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Configuration
@EnableWebMvc
public class ApplicationConfiguration extends WebMvcConfigurerAdapter {

    @Bean
    public InternalResourceViewResolver internalResourceViewResolver() {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/WEB-INF/pages/");
        viewResolver.setSuffix(".jsp");
        return viewResolver;
    }

    @Bean
    public ViewResolver jsonViewResolver() {
        return new JsonViewResolver();
    }

    @Bean
    public ViewResolver contentNegotiatingViewResolver(ContentNegotiationManager manager) {
        ContentNegotiatingViewResolver resolver = new ContentNegotiatingViewResolver();
        resolver.setContentNegotiationManager(manager);
        List<ViewResolver> resolvers = new ArrayList<>();
        resolvers.add(jsonViewResolver());
        resolvers.add(internalResourceViewResolver());
        resolver.setViewResolvers(resolvers);
        return resolver;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/lib/angular/*").addResourceLocations("/lib/angular/");
        registry.addResourceHandler("/lib/jquery/*").addResourceLocations("/lib/jquery/");
        registry.addResourceHandler("/lib/underscore/*").addResourceLocations("/lib/underscore/");

        registry.addResourceHandler("/css/bootstrap/css/*").addResourceLocations("/css/bootstrap/css/");
        registry.addResourceHandler("/css/bootstrap/fonts/*").addResourceLocations("/css/bootstrap/fonts/");
        registry.addResourceHandler("/css/bootstrap/js/*").addResourceLocations("/css/bootstrap/js/");
        registry.addResourceHandler("/css/*").addResourceLocations("/css/");

        registry.addResourceHandler("/js/*").addResourceLocations("/js/");
        registry.addResourceHandler("/views/*").addResourceLocations("/views/");
        registry.addResourceHandler("/views/partials/*").addResourceLocations("/views/partials/");
        registry.addResourceHandler("/views/templates/*").addResourceLocations("/views/templates/");
    }

    class JsonViewResolver implements ViewResolver {
        @Override
        public View resolveViewName(String viewName, Locale locale) throws Exception {
            MappingJackson2JsonView view = new MappingJackson2JsonView();
            view.setPrettyPrint(true);
            return view;
        }
    }
}

