package com.example.casestudy.repository;

import com.example.casestudy.entities.PolicyHolder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PolicyHolderDAO extends JpaRepository<PolicyHolder, Integer>
{

}
