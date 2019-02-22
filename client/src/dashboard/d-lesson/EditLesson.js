//NOTE holds all create lesson components

import React, { useReducer,useEffect,useState } from "react";
import Tools from "./Tools";
import MainEditor from "./MainEditor";
import StagedTools from "./StagedTools";
import ResourceEditor from "./ResourceEditor";
import { TOOLS_STATE } from "../d-context";
import { lessonReducer } from "../d-redux/reducers/lessonReducer";
import ImageList from "./ImageList";
import ToolConfig, { TOOL_CONFIG_MODAL_ID} from "./config/ToolConfig";
import { withTracker } from "meteor/react-meteor-data";
import { COL_Lessons } from "../../../../lib/Collections";
import { getUrlParam } from "../../utilities/Tasks";
import { editStaggedTools } from "../d-redux/actions/lessonActions";

const initialState = {
  data:{  x: 0,
    //TODO: REMOVE
    y: 0,
    node: {},
    icons: [],
    _id: '',
    name: ''},
  tools:[],
  addedTools:[],
  staggedTools:[],
  editTool:{},
  imageFiles:[],
  audioFiles:[],
}

// todo: Push the icon name to the icon array, as items that have been moved

function EditLesson({lesson}) {
  const [state, dispatch] = useReducer(lessonReducer, initialState);
  const [isLessonLoaded, preventLessonReload] = useState(false)

  let IS_PREVENT_LESSON_RELOAD = false;

  useEffect(()=>{

    var result =lesson && Object.keys(lesson).map(function (key) {
      return lesson[key];
    }) || [];
    
    if(IS_PREVENT_LESSON_RELOAD === false){
      // dispatch(editStaggedTools(result)) ;

   }

   if (result.length > 0 && !isLessonLoaded) {
     IS_PREVENT_LESSON_RELOAD = true;
     preventLessonReload(true)
      dispatch(editStaggedTools(result)) ;
     console.log('IS_PREVENT_LESSON_RELOAD',isLessonLoaded,state.staggedTools,result.length)

    }
 

  },[lesson])

  return (
    <TOOLS_STATE.Provider value={{ state, dispatch }}>
      <div className='editor-container'>

        <Tools />
        <RenderConfigBtnTrigger  />
        <div className="row">
          <ToolConfig />
          <MainEditor />
          {/* <ImageList /> */}
          <StagedTools />
          <ResourceEditor />
        </div>
      </div>
    </TOOLS_STATE.Provider>
  );
}

function RenderConfigBtnTrigger(){
  return(
    <div className="tool-config  col m12 offset-s5">
      <a href={`#${TOOL_CONFIG_MODAL_ID}`} className='waves-effect  waves-light  white-text  modal-trigger'>Settings</a>
    </div>
  )

}

export default withTracker((props) => {
  console.log()
  const _id =props.match.params.id;
  const lang =  getUrlParam('lan');
  Meteor.subscribe("lessons");
  Meteor.subscribe("users");
  return {
    lesson: COL_Lessons.findOne({_id}, { sort: { createdAt: -1 } })
  };
})(EditLesson);
