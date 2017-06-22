package cn.winson.resume.rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by winson on 17/6/22.
 */
@RestController
@RequestMapping("/resume")
public class ResumeRestController {

    @GetMapping("/hello")
    public String hello(){
        return "Hello everyone";
    }

}
