
interface Task {
  
    text:{
      head: string,
      body: string,
    },
    date:Date,
    uuid:string
  
}

export function generateTaskArr():Task[]{
    let taskArray = [];
    for( let i=0; i<40;i++){
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        let newObj = {
            text:{
                head:"Title No."+(i+1),
                body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            date:new Date(),
            uuid
        }
        taskArray.unshift(newObj)
    }
    

    return taskArray;
}