package br.com.polo.cesmar.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class PaginasController {

    @GetMapping("/index")
    public String index(){
        return "index";
    }

    @GetMapping("/formulario")
    public String formulario(){
        return "formulario";
    }

}
