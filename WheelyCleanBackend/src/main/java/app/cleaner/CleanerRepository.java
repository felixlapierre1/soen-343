/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app.cleaner;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Jun
 */
public interface CleanerRepository extends JpaRepository<Cleaner, Integer> {
    
}
