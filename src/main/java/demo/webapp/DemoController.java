package demo.webapp;
 
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.commons.lang3.exception.ExceptionUtils;
 
@Controller
public class DemoController {

    private static final Logger logger = LogManager.getLogger("DemoController");
 
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index(ModelMap model) {

        logger.debug("==== index");
 
        model.addAttribute("message", "Welcome");

        return "index";
 
    }
 
    @RequestMapping(value = "/{page}", method = RequestMethod.GET)
    public String getPage(@PathVariable String page, ModelMap model) {
 
        logger.debug("==== index " + page);

        model.addAttribute("message", "Welcome " + page);

        return "index";
 
    }
 
}

