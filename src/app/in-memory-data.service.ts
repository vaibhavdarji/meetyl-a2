import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let missions = [
        {
            "id": 1,
            "name": "Mars Orbiter Mission",
            "date": "2013",
            "remark": "Orbiter",
            "status": "Planned launch",
            "description": "1......"
        },
        {
            "id": 2,
            "name": "Schiaparelli EDM lander",
            "date": "2016",
            "remark": "Lander",
            "status": "Planned launch",
            "description": "1......"
        },
        {
            "id": 3,
            "name": "ExoMars Rover",
            "date": "2018",
            "remark": "Rover",
            "status": "Planned launch",
            "description": "1......"
        },
        {
            "id": 4,
            "name": "",
            "date": "2024",
            "remark": "Manned mission to Mars (More details soon)",
            "status": "Planned launch",
            "description": "1......"
        },
        {
            "id": 5,
            "name": "Mars to Stay",
            "date": "",
            "remark": "Settlement",
            "status": "Planned launch",
            "description": "1......"
        }
    ];
    return {missions};
  }
}
