package educalivros.spring.api.models.user;

import educalivros.spring.api.models.user.roles.UserRole;

public record RegisterDTO(String login, String senha, UserRole role) {

}
