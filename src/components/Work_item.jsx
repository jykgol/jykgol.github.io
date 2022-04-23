
function WorkItem(props) {

    let DataRestore = props.WorkItemDB.rightBubble.map(el => {
        return (
            <div className="page_2_work_el_right_Bubble">{el}
            </div>
        )
    })
    return (

        <div className="page_2_work_element">
            <div className="page_2_work_el_left flex_coloumn">
                <div className="page_2_work_el_left_Name">{props.WorkItemDB.leftName}</div>
                <div className="page_2_work_el_left_Data">{props.WorkItemDB.leftData}</div>
            </div>
            <div className="page_2_work_el_right flex_coloumn">
                <div className="page_2_work_el_right_Discribe regular_text">{props.WorkItemDB.rightDiscribe}</div>
                <div className="page_2_work_el_right_Bubbles">
                    {DataRestore}
                </div>
            </div>
        </div >
    );
}

export default WorkItem;
