


function ProjectItem(props) {
   
    return (
        <div className="page_3_list_element">
            <div className="page_3_list_element_left">
                <img src={props.ProjectItemDB.imgSrc} alt="alt" />
            </div>
            <div className="page_3_list_element_right flex_coloumn">
                <div className="page_3_list_right_header bold_text">{props.ProjectItemDB.title}</div>
                <div className="page_3_list_right_text regular_text">{props.ProjectItemDB.text}</div>            
                <a className={props.ProjectItemDB.a.ahref.length>0? "page_2_work_el_right_Bubble": null} href={props.ProjectItemDB.a.ahref} target="_blank">{props.ProjectItemDB.a.atext}</a>
               
            </div>
        </div>
    );
}
export default ProjectItem;