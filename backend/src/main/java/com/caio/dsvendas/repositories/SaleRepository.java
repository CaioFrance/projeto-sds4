package com.caio.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.caio.dsvendas.dto.SaleSuccessDTO;
import com.caio.dsvendas.dto.SaleSumDTO;
import com.caio.dsvendas.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query("SELECT new com.caio.dsvendas.dto.SaleSumDTO(s.seller, SUM(s.amount)) "
			+ "FROM Sale s GROUP BY s.seller")
	List<SaleSumDTO> amountGroupBySeller();
	
	@Query("SELECT new com.caio.dsvendas.dto.SaleSuccessDTO(s.seller, SUM(s.visited), SUM(s.deals)) "
			+ "FROM Sale s GROUP BY s.seller")
	List<SaleSuccessDTO> successGroupBySeller();
}
