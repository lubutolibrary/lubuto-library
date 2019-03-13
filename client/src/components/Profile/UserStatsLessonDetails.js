import React,{useState} from "react";
import { withTracker } from "meteor/react-meteor-data";
import { COL_USER_STATS } from "../../../../lib/Collections";
import { getAttempts, getProgress, getPassStatus, formatTime, getFilteredLessons } from "./methods";

// we will call the stats here
function UserStatsLessonDetails({  lessons, match }) {

  const [pages, setPages] = useState([]);


  const onLessonChange = e =>{
    let val = e.target.value;
    val = val.split(',');
    const userId = match.params.id;
    const query = { userId, lang: val[1], lessonNumber: parseInt(val[0]) };
    const _pages = COL_USER_STATS.find(query).fetch();
    console.log(_pages, 'pafes', query)
    setPages(_pages);
  }

  return (
    <>
      <LessonSelector lessons={lessons} onChange={onLessonChange} />
    <table className="highlight striped centered responsive-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Page Number</th>
          <th>Date Started</th>
          <th>Tries</th>
          <th>Time Taken</th>
          <th>Mark</th>
          <th>Langauge</th>
        </tr>
      </thead>
      <tbody>
        <Details pages={pages} />
      </tbody>
    </table>
    </>
  );
}


function Details({pages}){
  return pages.map((item,index) =>{
    const attempts = getAttempts(item.question);
    const isMark = getPassStatus(item.question); 

    return (
      <tr key={index}>
        <td> {index+1} </td>
        <td> {item.lessonPageNumber} </td>
        <td> {new Date(item.createdAt).toDateString()} </td>
        <td> {attempts.attempts + `[${attempts.questions}]`} </td>
        <td> {formatTime(item.time)} </td>
        <td> {
          isMark && <i className="material-icons">done</i>
          || "X" 
        }  </td>
        <td> {item.lang} </td>
      </tr>
    )

  })
}


function LessonSelector({ lessons, onChange}){

  const filteredLessons = getFilteredLessons(lessons);

return (
  <>
    <label>Choose Lesson</label>
    <select className="browser-default" onChange={onChange} >
      <option value="" disabled defaultValue="">Choose Lesson Number</option>
      <GetLessonsOptions filteredLessons={filteredLessons} />
    </select>
  </>
)
}


function GetLessonsOptions({ filteredLessons}){
  return filteredLessons.map((item,index)=>(
    <option value={`${item.lessonNumber},${item.lang}`}>{item.lessonNumber}</option>
  ))
}

export default withTracker((props) => {
  Meteor.subscribe("col_tools");
  Meteor.subscribe("users");
  const userId = props.match.params.id;
  const query = { userId, lang: 'kao',lessonNumber:1};
  const query2 = {userId};
  return {
    // pages: COL_USER_STATS.find(query).fetch(),
    lessons: COL_USER_STATS.find(query2).fetch(),
  };
})(UserStatsLessonDetails);


