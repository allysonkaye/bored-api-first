const text = document.getElementById("text");
const click = document.getElementById("click");


// a function to get the activity from api
const getActivity = async () => {
    let type = getType();
    let url = "http://www.boredapi.com/api/activity/?type=" + type;
    console.log(url)

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        if (type != data.type) {
            text.style.visibility = "visible";
            text.style.transition = "ease in"
            text.style.color = "#b91c1c";
            text.innerHTML = " [ Select a type ]";   
            
            setTimeout ( () => {
                text.style.visibility = "hidden";
            },1000)
        }
        else {

            text.style.visibility = "visible";
            text.style.color = "#020617"
            text.innerHTML = data.activity;
            console.log(type);  
        }
        
    }
    catch (error) {
        console.error(error);
    }
}

// get the activity type from user
const getType = () => {
    let type = document.getElementById("type");
    return type.value;

}
console.log(type);
