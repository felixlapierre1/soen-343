package app.db;

import java.io.Serializable;
import javax.persistence.*;

@Entity //This tells Hibernate to make a table out of this class
@Table(name = "softboi")
public class SoftBoi implements Serializable {
    /**
     * If we change the fields of the SoftBoi class, we should also
     * change the serialVersionUID to indicate that old softbois cannot
     * be deserialized into the new softbois.
     */
    private static final long serialVersionUID = -2343243243242432341L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    public SoftBoi() {
    }

    public SoftBoi(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
