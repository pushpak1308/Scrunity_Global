package mr.buddies.project.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.format.DateTimeFormatter;
import java.util.Date;

@Entity
@Table(name = "projects")
public class ProjectBean {

    @Id
    @Column(name = "projectid")
    int projectId;

    @Column(name= "projectname")
    String projectName;

    @Column(name = "clientname")
    String clientName;

    @Column(name = "target")
    int target;

    @Column(name = "optimisticsearch")
    int optimisticSearch;

    @Column(name = "description")
    String description;

    @Column(name = "surveylink")
    String surveyLink;

    @Column(name = "dateTime")
    Date dateTime;

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public int getTarget() {
        return target;
    }

    public void setTarget(int target) {
        this.target = target;
    }

    public int getOptimisticSearch() {
        return optimisticSearch;
    }

    public void setOptimisticSearch(int optimisticSearch) {
        this.optimisticSearch = optimisticSearch;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSurveyLink() {
        return surveyLink;
    }

    public void setSurveyLink(String surveyLink) {
        this.surveyLink = surveyLink;
    }

    public Date getDateTime() {
        return dateTime;
    }

    public void setDateTime(Date dateTime) {
        this.dateTime = dateTime;
    }
}
