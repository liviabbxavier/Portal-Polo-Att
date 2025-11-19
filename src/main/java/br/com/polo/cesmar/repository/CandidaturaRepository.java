package br.com.polo.cesmar.repository;

import br.com.polo.cesmar.model.Candidatura;
import br.com.polo.cesmar.model.Vaga;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidaturaRepository extends JpaRepository<Candidatura, Long> {
    void deleteByVaga(Vaga vaga);
}