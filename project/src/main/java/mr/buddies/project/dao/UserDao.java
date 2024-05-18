package mr.buddies.project.dao;

import mr.buddies.project.beans.UserBean;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<UserBean,Long> {
}
