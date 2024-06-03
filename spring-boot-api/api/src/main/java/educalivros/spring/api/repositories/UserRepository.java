package educalivros.spring.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

import educalivros.spring.api.models.user.User;


public interface UserRepository extends JpaRepository<User,Long>{

    UserDetails findByLogin(String login);
}
