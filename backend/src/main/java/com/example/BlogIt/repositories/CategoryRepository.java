package com.example.BlogIt.repositories;

import com.example.BlogIt.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category,Integer>
{
    Optional<Category> findCategoryByName(String categoryname);
}