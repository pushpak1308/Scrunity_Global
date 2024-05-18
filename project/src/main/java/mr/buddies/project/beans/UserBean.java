package mr.buddies.project.beans;

import jakarta.persistence.*;

import java.sql.ResultSet;
import java.sql.SQLException;


@Entity
@Table(name = "users")
public class UserBean {

    @Id
    @Column(name = "id")
    int id;

    @Column(name = "name")
    String name;

    @Column(name = "username")
    String username;

    @Column(name = "password")
    String password;

    @Column(name = "number")
    String number;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

//    public void setData(ResultSet resultSet) throws SQLException {
//        this.id = resultSet.getInt("id");
//        this.name = resultSet.getString("name");
//        this.username = resultSet.getString("username");
//        this.password = resultSet.getString("password");
//        this.number = resultSet.getString("number");
//    }
}
