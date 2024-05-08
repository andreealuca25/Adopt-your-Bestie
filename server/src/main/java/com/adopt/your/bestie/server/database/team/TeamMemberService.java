package com.adopt.your.bestie.server.database.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamMemberService {

    @Autowired
    private TeamMemberRepository teamMemberRepository;

    public List<TeamMember> getAllTeamMembers() {
        return teamMemberRepository.findAll();
    }

    public TeamMember getTeamMemberById(Long id) {
        return teamMemberRepository.findById(id).orElse(null);
    }

    public TeamMember createTeamMember(TeamMember teamMember) {
        return teamMemberRepository.save(teamMember);
    }

    public TeamMember updateTeamMember(Long id, TeamMember teamMember) {
        TeamMember existingTeamMember = teamMemberRepository.findById(id).orElse(null);
        if (existingTeamMember != null) {
            existingTeamMember.setName(teamMember.getName());
            existingTeamMember.setRole(teamMember.getRole());
            existingTeamMember.setIcon(teamMember.getIcon());
            existingTeamMember.setDescription(teamMember.getDescription());
            return teamMemberRepository.save(existingTeamMember);
        } else {
            return null;
        }
    }

    public void deleteTeamMember(Long id) {
        teamMemberRepository.deleteById(id);
    }
}
