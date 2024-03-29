package com.example.BlogIt.repositories;

import java.util.List;

import com.example.BlogIt.entities.Category;
import com.example.BlogIt.entities.Post;
import com.example.BlogIt.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;



public interface PostRepository extends JpaRepository<Post,Integer> {

    List<Post> findPostByUser(User username);
    List<Post> findPostByUser(User username,Sort sort);
    List<Post> findPostByCategory(Category category);
    Page<Post> findPostByCategory(Category category,Pageable pageable);

    List<Post> findByTitleContaining(String title);

}