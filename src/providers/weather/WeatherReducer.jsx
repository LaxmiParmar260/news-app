const WeatherReducer = (state, action)=>{

    switch(action.type){
        case "GET_WEATHER" :
            return{

                ...state,
                weather : action.payload

            }
    }

}

export default WeatherReducer