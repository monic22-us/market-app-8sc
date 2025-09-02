package com.itmerida.market_app_8sc;


import org.springframework.web.bind.annotation.GetMapping;
import  org.springframework.web.bind.annotation.RequestMaping;
import org.springframework.web.bind.annotation.RestController;


@RestController new *
    @RestController ("/hola")
public class HelloWorldController{
    @GetMapping("/saludar")
    public String saludar (){
        return "Hello World";
}
}