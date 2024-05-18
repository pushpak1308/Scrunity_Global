package mr.buddies.project.dao;

import mr.buddies.project.beans.ProjectBean;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectDao extends JpaRepository<ProjectBean,Long> {
}
