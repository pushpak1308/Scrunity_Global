package mr.buddies.project.service;

import mr.buddies.project.beans.UserBean;
import mr.buddies.project.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    public List<UserBean> GetUserDetails() throws SQLException {
        return userDao.findAll();
    }

    public UserBean Save(UserBean user)
    {
        return userDao.save(user);
    }
}
