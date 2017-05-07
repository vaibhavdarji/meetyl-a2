import { Component, Input } from '@angular/core';

import {Mission} from './mission';
import { MissionService } from './mission.service';

@Component({
  selector: 'mission-detail',
  templateUrl: './mission-detail.html'
})
export class MissionDetailComponent {
    @Input() mission: Mission;
    @Input() editMode: boolean;

    constructor(private missionService: MissionService) {}


    switchMode () {
        this.editMode = !this.editMode;
    }

    onEdit() {
        this.switchMode();
    }

    onSave () {
        this.missionService.update(this.mission)
      .then(() => this.switchMode());
    }

    onDelete(): void {
        this.missionService
            .delete(this.mission.id)
            .then(() => {
              this.mission = null;
            });
    }

    onSubmit () {
        this.onSave();
    }


}
