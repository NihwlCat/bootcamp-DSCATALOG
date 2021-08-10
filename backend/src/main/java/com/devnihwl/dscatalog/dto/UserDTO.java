package com.devnihwl.dscatalog.dto;

import com.devnihwl.dscatalog.entities.User;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

public class UserDTO {
    private Long id;

    @NotEmpty (message = "Campo obrigatório")
    private String firstName;
    private String lastName;

    @Email (message = "Email deve ser válido")
    private String email;

    private final List<RoleDTO> roles = new ArrayList<>();

    public UserDTO() {
    }

    public UserDTO(Long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public UserDTO(User user){
        id = user.getId();
        firstName = user.getFirstName();
        lastName = user.getLastName();
        email = user.getEmail();

        user.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }

    public List<RoleDTO> getRoles() {
        return roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
