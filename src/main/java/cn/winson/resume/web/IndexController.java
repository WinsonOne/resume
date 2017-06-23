package cn.winson.resume.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by winson on 17/6/23.
 */
@Controller
public class IndexController {

    @GetMapping("/")
    public String index(){
        return "redirect:/index.html";
    }
}
