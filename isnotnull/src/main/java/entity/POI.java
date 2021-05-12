package entity;

import java.io.Serializable;
public class POI implements Serializable{
    private Integer place_id;
    private String place_type;
    private String place_desc;
    private String place_address;
    private String place_open_hrs;
    private String place_difficulty;
    private String place_toilet_avlbl;
    private String place_accessible;
    private String place_water_tap;
    private String place_elevation;
    private String place_length;
    private String place_route_type;
    private String place_complete_time;


    public POI() {
    }


    public Integer getPlace_id() {
        return this.place_id;
    }

    public void setPlace_id(Integer place_id) {
        this.place_id = place_id;
    }

    public String getPlace_type() {
        return this.place_type;
    }

    public void setPlace_type(String place_type) {
        this.place_type = place_type;
    }

    public String getPlace_desc() {
        return this.place_desc;
    }

    public void setPlace_desc(String place_desc) {
        this.place_desc = place_desc;
    }

    public String getPlace_address() {
        return this.place_address;
    }

    public void setPlace_address(String place_address) {
        this.place_address = place_address;
    }

    public String getPlace_open_hrs() {
        return this.place_open_hrs;
    }

    public void setPlace_open_hrs(String place_open_hrs) {
        this.place_open_hrs = place_open_hrs;
    }

    public String getPlace_difficulty() {
        return this.place_difficulty;
    }

    public void setPlace_difficulty(String place_difficulty) {
        this.place_difficulty = place_difficulty;
    }

    public String getPlace_toilet_avlbl() {
        return this.place_toilet_avlbl;
    }

    public void setPlace_toilet_avlbl(String place_toilet_avlbl) {
        this.place_toilet_avlbl = place_toilet_avlbl;
    }

    public String getPlace_accessible() {
        return this.place_accessible;
    }

    public void setPlace_accessible(String place_accessible) {
        this.place_accessible = place_accessible;
    }

    public String getPlace_water_tap() {
        return this.place_water_tap;
    }

    public void setPlace_water_tap(String place_water_tap) {
        this.place_water_tap = place_water_tap;
    }

    public String getPlace_elevation() {
        return this.place_elevation;
    }

    public void setPlace_elevation(String place_elevation) {
        this.place_elevation = place_elevation;
    }

    public String getPlace_length() {
        return this.place_length;
    }

    public void setPlace_length(String place_length) {
        this.place_length = place_length;
    }

    public String getPlace_route_type() {
        return this.place_route_type;
    }

    public void setPlace_route_type(String place_route_type) {
        this.place_route_type = place_route_type;
    }

    public String getPlace_complete_time() {
        return this.place_complete_time;
    }

    public void setPlace_complete_time(String place_complete_time) {
        this.place_complete_time = place_complete_time;
    }


    @Override
    public String toString() {
        return "{" +
            " place_id:\"" + getPlace_id() + "\"" +
            ", place_type:\"" + getPlace_type() + "\"" +
            ", place_desc:\"" + getPlace_desc() + "\"" +
            ", place_address:\"" + getPlace_address() + "\"" +
            ", place_open_hrs:\"" + getPlace_open_hrs().replace("OPEN: ","") + "\"" +
            ", place_difficulty:\"" + getPlace_difficulty() + "\"" +
            ", place_toilet_avlbl:\"" + getPlace_toilet_avlbl() + "\"" +
            ", place_accessible:\"" + getPlace_accessible() + "\"" +
            ", place_water_tap:\"" + getPlace_water_tap() + "\"" +
            ", place_elevation:\"" + getPlace_elevation() + "\"" +
            ", place_length:\"" + getPlace_length() + "\"" +
            ", place_route_type:\"" + getPlace_route_type() + "\"" +
            ", place_complete_time:\"" + getPlace_complete_time() + "\"" +
            "}";
    }

}
