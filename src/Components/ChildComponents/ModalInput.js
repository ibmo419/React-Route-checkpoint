import {useState} from 'react'
import MovieCard from './MovieCard';

function ModalInput(){
    
    const [addmovie, setAddmovie] = useState([{name:'',rate:'',description:'',img:''}])
    
    const handleChange=(e)=>{
        e.preventDefault();
        setAddmovie([{...addmovie[0],[e.target.id]:e.target.value}]);
        }

        return (
            <div style={{padding:20}}>
                <MovieCard addmovie={addmovie}/>
               <form id='AddMovie'>
                   <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                   <label >Movie's name:</label>
                 <input type="text" id="name" placeholder='Write the name of movie' onChange={handleChange} /><br></br>
                 <label >Movie's rating:</label>
                 <input type="text" id="rate" placeholder='write the rate of movie' onChange={handleChange}/><br></br>
                 <label >Image's url:</label>
                 <input type="text" id="img" placeholder='write the url of image' onChange={handleChange}/><br></br>
                  
                 <label >Description:</label>
                 <textarea type="text" id="description" placeholder='description about the movie' onChange={handleChange}/><br></br>
                   </div>
               </form>
               
            </div>
        )
    
}

export default ModalInput
