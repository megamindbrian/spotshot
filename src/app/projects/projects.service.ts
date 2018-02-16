import { Job } from "./interfaces/Job";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ProjectsService {
    public assignedToMe = new BehaviorSubject<Array<Job>>(new Array<Job>());

    public postedByMe = new BehaviorSubject<Array<Job>>(new Array<Job>());

    constructor() {
        // insert some sample data here

    }
}