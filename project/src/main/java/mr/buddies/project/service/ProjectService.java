package mr.buddies.project.service;

import mr.buddies.project.beans.ProjectBean;
import mr.buddies.project.dao.ProjectDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    @Autowired
    private ProjectDao projectDao;

    public ProjectBean SaveProject(ProjectBean project)
    {
        return projectDao.save(project);
    }

}
