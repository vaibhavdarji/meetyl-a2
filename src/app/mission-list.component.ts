import { Component, OnInit, Output, EventEmitter } from '@angular/core';


import { Mission } from './mission';
import { MissionService } from './mission.service';

@Component({
  selector: 'mission',
  templateUrl: './mission-list.html',
  providers: [MissionService]
})

export class MissionListComponent implements OnInit {

    missions: Mission[];
    selectedMission: Mission;
    editMode: boolean;

    @Output()
    add: EventEmitter<Mission> = new EventEmitter();

    constructor(private missionService: MissionService) {
        this.editMode = false;
    }

    getMissions(): void {
      this.missionService.getMissions().then(missions => this.missions = missions);
    }

    ngOnInit(): void {
      this.getMissions();
    }

    onSelect(mission: Mission): void {
        this.editMode = false;
        this.selectedMission = mission;
    }

    addMission(): void {
        var selectedMission = new Mission();
        this.add.emit(selectedMission);
        var lastRecord = this.missions[this.missions.length - 1];
        selectedMission.id = lastRecord.id + 1;
        this.editMode = true;
        this.missionService.create(selectedMission)
            .then(mission => {
                this.missions.push(mission);
                this.selectedMission = mission
            });

    }
}
