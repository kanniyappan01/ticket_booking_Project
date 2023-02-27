import './SelectSeat.css'
import React, { useContext, useEffect, useReducer,useState } from 'react';
// import { intialState,updateReducer } from '../../reducer/reducer';
import { wraperContext } from '../../App';
import SideBar from '../../components/sideBar/SideBar';
import { useParams } from 'react-router-dom';


const SelectSeat = () => {
    const [movies,setMovies] = useState(JSON.parse(localStorage.getItem('data')))
    console.log(movies)
    const {id} = useParams()
    const [movie,setMovie]= useState(undefined);
    const [seatSelected,setSeatSelected] = useState([]);
    let selected=[];
    const {state} = useContext(wraperContext);
    useEffect(()=>{
        const existingSeat =localStorage.getItem('seatTaken');
        if(existingSeat){
            selected.push(...JSON.parse(existingSeat));
        }
    },[selected])
    useEffect(()=>{
        if(id){
            const fetchUrl = async () =>{
                await setMovie(state.movieList.find(cinema => cinema.id === parseInt(id)));
            }
            fetchUrl();
        }
    },[id])
    console.log(id)
    
    const handleActive =(e)=>{
        setSeatSelected([...seatSelected,e.target.dataset.seatname])
        console.log(e.target.parentElement)
        let seat = e.target.dataset.seatname;
        e.target.classList.toggle("seat-active")
        // let num = Array([2])
        // num.map(value => console.log(value))
        
    }
    console.log(seatSelected)
    const collection = document.getElementsByClassName('seat-active');
    
    const handleSubmit =(e)=>{
        Array.from(collection).map(td => {
            if(!selected.includes(td.dataset.seatname)){
                selected.push(td.dataset.seatname);
                td.classList.add("seat-taken");
            }
        })
        localStorage.setItem('seatTaken', JSON.stringify(selected))
        setSeatSelected([])
    }
    const handleCancel=()=>{
        console.log(collection)
    }
  return (
    <section>
        <div className='container content_wraper'>
            <div className='content_wraper_inner'>
                <div className='content_and_sidebar'>
                    <div className='row'>
                        <div className='main_content col-lg-9'>
                            <div className='main_inner_container '>
                                <div className='seat_container yt-scrolbar'>
                                    {state.items.seatType.map((item,i) =>(
                                        <div key={i} className={`${item.title}_wraper mb-3`}>
                                        <div className='batch_title'>
                                            <h5 className='mb-3'>{`${item.type} ₹${item.price}`}</h5>
                                        </div>
                                        <table>
                                            <tbody>
                                                {state.items.seatStructure[item.type].map((itemRow,i) => (
                                                    <tr key={i} className={`${itemRow.row}`}>
                                                        <td className='row_title'>{itemRow.row}</td>
                                                        
                                                        {itemRow.seats.map(seat =>
                                                            {
                                                                if(seat === 11 || seat === 12){
                                                                    return <td key={seat} className='seats'></td>;
                        
                                                                }else{
                                                                    return <td key={seat} className={`seats seat-available ${state?.taken.includes((itemRow.row+seat)) === true ? "seat-taken":""}${state?.inActive.includes((itemRow.row+seat)) === true ? "seat-inactive": ""}`} data-seatname={`${itemRow.row}${seat}`} data-seatno={seat} onClick={(e)=> (state?.taken.includes((itemRow.row+seat)) || state?.taken.includes((itemRow.row+seat)) || state?.inActive.includes((itemRow.row+seat) ) === true ?  '':handleActive(e) )} ></td>
                                                                }
                                                            }
                                                        )}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        </div>
                                    ))}
                                    {/* <button className='submit-btn' onClick={handleSubmit}>submit</button> */}
                                </div>
                                <div className='user_detials'>
                                    <div className='screen_wraper'>
                                        <span style={{color:"gray"}}>Screen This Way</span>
                                    </div>
                                    <div className='seat_detials'>
                                        <div className='available'>
                                            <img src={`https://cdn11.ticketnew.com/images/available.png`} alt="available seat"/><span style={{color:"gray"}}>Available</span>
                                        </div>
                                        <div className='taken'>
                                            <img src={`https://cdn11.ticketnew.com/images/taken.png`} alt="available seat"/><span style={{color:"gray"}}>Taken</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sidebar_content col-lg-3'>
                            {movie && <SideBar seatSelected={seatSelected} movie={movie} handleCancel={handleCancel} handleSubmit={handleSubmit}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
 
export default SelectSeat