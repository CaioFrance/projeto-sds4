package com.caio.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.caio.dsvendas.dto.SaleDTO;
import com.caio.dsvendas.dto.SaleSuccessDTO;
import com.caio.dsvendas.dto.SaleSumDTO;
import com.caio.dsvendas.entities.Sale;
import com.caio.dsvendas.repositories.SaleRepository;
import com.caio.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pabeable) {
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pabeable);
		return result.map(seller -> new SaleDTO(seller));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupBySeller() {
		sellerRepository.findAll();
		return repository.amountGroupBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupBySeller() {
		sellerRepository.findAll();
		return repository.successGroupBySeller();
	}
	
}
