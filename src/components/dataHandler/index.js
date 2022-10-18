let data = 
    [
        {
            "id":1,
            "thumbnail":"cardimage/Group 1000002771.png",
            "status":"upcoming",
            "title":"Data Science Bootcamp - Graded Datathon",
            "statustime":"starts in",
            "time":"00 : 15 : 22",
            "unit":"Days  Hours  Mins",
            "level":"easy",
            "description":" This is the deafult description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "start_date":"2022-10-25",
            "end_date":"2022-10-28",
            "images":""
        },
    
        {
            "id":2,
            "thumbnail":"cardimage/Group 1000002766.png",
            "status":"upcoming",
            "title":"Data Sprint 72 - Butterfly Identification",
            "statustime":"starts in",
            "time":"00  :  12  :  34",
            "unit":"Days  Hours  Mins",
            "level":"easy",
            "description":"This is the deafult description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            "start_date":"2022-10-27",
            "end_date":"2022-10-28",
            "images":""
        },
    
        {
            "id":3,
            "thumbnail":"cardimage/Group 1000002767.png",
            "status":"active",
            "title":"Data Sprint 71 - Weather Recognition",
            "statustime":"ends in",
            "time":"01 : 17 : 10",
            "unit":"Days  Hours  Mins",
            "level":"hard",
            "description":" This is the deafult description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "start_date":"2022-10-10",
            "end_date":"2022-10-28",
            "images":""
        },
    
        {
            "id":4,
            "thumbnail":"cardimage/Group 1000002772.png",
            "status":"active",
            "title":"Data Sprint 70-Airline Passenger Satisfaction",
            "statustime":"ends in",
            "time":"00 : 11 : 27",
            "unit":"Days  Hours  Mins",
            "level":"medium",
            "description":" This is the deafult description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "start_date":"2022-10-12",
            "end_date":"2022-10-26",
            "images":""
        },
    
        {
            "id":5,
            "thumbnail":"cardimage/Group 1000002773.png",
            "status":"past",
            "title":"Engineering Graduates Employment Outcomes",
            "statustime":"ended on",
            "time":"16th May'22 09:00 PM",
            "unit":"",
            "level":"easy",
            "description":" This is the deafult description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "start_date":"2022-10-10",
            "end_date":"2022-10-12",
            "images":""
        },
    
        {
            "id":6,
            "thumbnail":"cardimage/Group 1000002466.png",
            "status":"past",
            "title":"Travel Insurance Claim Prediction",
            "statustime":"ended on",
            "time":"16th May'22 09:00 PM",
            "unit":"",
            "level":"easy",
            "description":"This is the deafult description:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
            "start_date":"2022-10-8",
            "end_date":"2022-10-13",
            "images":""
        }
    ]
let id = 7;
export const add = (newObj) =>{
    newObj["id"] = id;

    data.push(newObj);
    console.log(data);
    id++;
}    

export const deleteObj = (id) =>{
    data = data.filter(item => item.id  != id);
    console.log('here in delete')
    console.log(data);
}

export const edit = (newObj, inc) => {
    console.log(newObj)
    deleteObj(inc);
    add(newObj);
    console.log(data)
}

export const getData = () => {
    return data;
}

export const getIdData = (id) => {
    console.log(id)
    for(let obj in data){
        console.log(obj)
        if(data[obj].id == id) return data[obj];
    }
}