package mr.buddies.project.controller;

import jakarta.persistence.*;
import mr.buddies.project.beans.UserBean;
import mr.buddies.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @ResponseBody
    @GetMapping("/admin")
    public List<UserBean> GetUserDetails() throws SQLException {
        return userService.GetUserDetails();
    }

    @PostMapping("/signup")
    public UserBean SaveUser(@RequestBody UserBean user)
    {
        return userService.Save(user);
    }
}
