package entity;

import java.io.Serializable;

public class ActiveTravel implements Serializable{
    private Integer id;
    private String years;
    private String age_group;
    private String gender;
    private String participation;
    private String part_prcnt;


    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getYears() {
        return this.years;
    }

    public void setYears(String years) {
        this.years = years;
    }

    public String getAge_group() {
        return this.age_group;
    }

    public void setAge_group(String age_group) {
        this.age_group = age_group;
    }

    public String getGender() {
        return this.gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getParticipation() {
        return this.participation;
    }

    public void setParticipation(String participation) {
        this.participation = participation;
    }

    public String getPart_prcnt() {
        return this.part_prcnt;
    }

    public void setPart_prcnt(String part_prcnt) {
        this.part_prcnt = part_prcnt;
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", years='" + getYears() + "'" +
            ", age_group='" + getAge_group() + "'" +
            ", gender='" + getGender() + "'" +
            ", participation='" + getParticipation() + "'" +
            ", part_prcnt='" + getPart_prcnt() + "'" +
            "}";
    }

}
