import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'
import { COL_Lessons } from '../../lib/Collections'

// create an icon reference

// Todo: Clean 
Meteor.methods({
    saveLesson(lesson){
        lesson['createdAt'] = new Date();
        COL_Lessons.insert(lesson, err => err ? console.log(err.reason) : 'success')
    },
    editLesson(lesson) {
        return COL_Lessons.update({ _id: lesson._id }, { $set: lesson}, err => err ? console.log(err.reason) : 'success')
    }
})