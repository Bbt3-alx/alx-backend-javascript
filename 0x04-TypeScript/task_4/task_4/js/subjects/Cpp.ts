/// <reference path='./Teacher.ts' />

namespace Subjects {
     // Declaration merging to add experienceTeachingC to Teacher interface
    export interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC < 1){
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName}`
            }
        }
    }
}