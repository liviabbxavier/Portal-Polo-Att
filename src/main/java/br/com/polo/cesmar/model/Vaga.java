package br.com.polo.cesmar.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.time.LocalDate;

@Entity
@Table(name = "vagas")
@Data // Gera Getters, Setters, toString, equals, hashCode
@NoArgsConstructor
@AllArgsConstructor
public class Vaga {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_vaga")
    private String nomeVaga;

    @Column(name = "empresa_contratante")
    private String empresaContratante;

    @Column(name = "horario_funcionamento")
    private String horarioFuncionamento;

    private String descricao;

    private String requisitos;

    @Column(name = "data_publicacao")
    private LocalDate dataPublicacao;

    private String status;

    public void setStatus(String ativa) {
    }

    public void setDataPublicacao(LocalDate now) {
    }

    public CharSequence getNomeVaga() {
        return null;
    }
}