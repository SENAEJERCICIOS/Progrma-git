package com.sena.quecocinar.service;

import com.sena.quecocinar.model.Recetas;
import com.sena.quecocinar.repository.RecetasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class RecetasService {

    @Autowired
    RecetasRepository recetasRepository;

    public List vereceta (){
        List<Recetas> recetass =new ArrayList<Recetas>();
        recetass.addAll(recetasRepository.findAll());
        return recetass;

    }
       public void creaYactualizarreceta(Recetas recetas){
        recetasRepository.save(recetas);

    }
    public void eliminareceta (Long id){
        recetasRepository.deleteAllById(Collections.singleton(id));


    }
}
