package mr.buddies.project.controller;

import mr.buddies.project.beans.ProjectBean;
import mr.buddies.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/add-new-project")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @ResponseBody
    @PostMapping("/savenewproject")
    public ProjectBean SaveProject(@RequestBody ProjectBean project)
    {
        return projectService.SaveProject(project);
    }

}
