package io.javabrains.ipldashboard.repository;

import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import io.javabrains.ipldashboard.model.Match;
import org.springframework.data.repository.query.Param;

public interface MatchRepository extends CrudRepository<Match,Long> {
    List<Match> getByTeam1OrTeam2OrderByDateDesc(String teamName1, String teamName2, Pageable pageable);

    @Query("select m from Match m where (m.team1 = :teamName or m.team2 = :teamName) and m.date between :dateStart and :dateEnd order by date desc")
    List<Match> getMatchesByTeamBetweenDates(@Param("teamName") String teamName1, @Param("dateStart") LocalDate date1, @Param("dateEnd") LocalDate date2);
    default List<Match> findLatestMatchesByTeam(String teamName, int count) {
        return getByTeam1OrTeam2OrderByDateDesc(teamName, teamName, PageRequest.of(0, count));
    }

}
