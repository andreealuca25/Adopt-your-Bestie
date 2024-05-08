package com.adopt.your.bestie.server.database.team;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
public class TeamMemberRestController {

    @Autowired
    private TeamMemberService teamMemberService;

    @GetMapping("")
    public List<TeamMember> getAllTeamMembers() {
        return teamMemberService.getAllTeamMembers();
    }

    @GetMapping("/{id}")
    public TeamMember getTeamMemberById(@PathVariable Long id) {
        return teamMemberService.getTeamMemberById(id);
    }

    @PostMapping("/add")
    public TeamMember createTeamMember(@RequestBody TeamMember teamMember) {
        return teamMemberService.createTeamMember(teamMember);
    }

    @PutMapping("/{id}")
    public TeamMember updateTeamMember(@PathVariable Long id, @RequestBody TeamMember teamMember) {
        return teamMemberService.updateTeamMember(id, teamMember);
    }

    @DeleteMapping("/{id}")
    public void deleteTeamMember(@PathVariable Long id) {
        teamMemberService.deleteTeamMember(id);
    }
}
