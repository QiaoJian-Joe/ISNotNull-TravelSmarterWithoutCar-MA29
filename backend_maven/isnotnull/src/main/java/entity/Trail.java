package entity;

import java.io.Serializable;

public class Trail implements Serializable{
    private String detailedInfo;
    private String type;
    private String title;
    private Integer id;

    public String getDetailedInfo() {
        return this.detailedInfo;
    }

    public void setDetailedInfo(String detailedInfo) {
        this.detailedInfo = detailedInfo;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "{" +
            " detailedInfo='" + getDetailedInfo() + "'" +
            ", type='" + getType() + "'" +
            ", title='" + getTitle() + "'" +
            ", id='" + getId() + "'" +
            "}";
    }

}
