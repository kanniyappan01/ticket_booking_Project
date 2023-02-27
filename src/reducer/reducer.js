export const intialState = {
    items:JSON.parse(localStorage.getItem('data')),
    taken:JSON.parse(localStorage.getItem('seatTaken')) || [],
    inActive:["J21","J20","K12","K13"],
    movieList:null
};

export const updateReducer=(state,action)=>{

    switch (action.type) {
        case "seatTaken":
            return{
                ...state,
                taken:action.payload,
            }
        case 'list':
            return{
                ...state,
                movieList:action.payload,
            }
        default:
            return state;
    }
}
