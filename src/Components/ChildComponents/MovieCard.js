import React ,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {FcSearch} from 'react-icons/fc'
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function MovieCard({addmovie}) {
    const [movies, setMovies] = useState(
        [{
        name:'Avatar',
        rate:9,
        trailer:"https://www.youtube.com/embed/AxLH0lXEGAY",
        description:"Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver.",
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg"
                },
        {
        name:'Undisputed',
        rate:6,
        trailer:"https://www.youtube.com/embed/KQtB3-NMfnU",
        description:'Undisputed is a 2002 American action sports film written, produced and directed by Walter Hill and starring Wesley Snipes and Ving Rhames. It was released in the United States on August 23, 2002.',
        img:'https://images-na.ssl-images-amazon.com/images/I/71zd0HVSU2L._SL1200_.jpg'
        },
        {
        name:'Fast & Furious',
        rate:7,
        trailer:"https://www.youtube.com/embed/FUK2kdPsBws",
        description:'Fast & Furious 9 is an upcoming American action film directed and co-written by Justin Lin with Daniel Casey. It is the sequel to The Fate of the Furious (2017), the ninth main installment, and the tenth full-length film released overall in the Fast & Furious franchise.',
        img:'https://i2.wp.com/honknews.com/wp-content/uploads/2020/01/22ede24a9e80bd9369fe2a872f938601.jpg?fit=1248%2C1765&ssl=1'
        },
        {
        name:'In Time',
        rate:5,
        trailer:"https://www.youtube.com/embed/6zB6wZKEObc",
        description:'In Time was a science fiction film where people stopped aging at 25 years old. The problem is they can only live for one more year and unless they earn more time.',
        img:'https://i.ytimg.com/vi/_P8eFRCfno8/movieposter.jpg'
        }
        ]
            )
        const[url,setUrl]=useState('')
            const AddMovie=()=>{
                if(addmovie[0].name!='' && addmovie[0].rate!='' && addmovie.img!='' && addmovie.description!=''){
                    setMovies([...movies,addmovie[0]])
                }else{
                    alert('empty input')
                }
            }

    const [filtering,setFiltering]=useState('')
    const handleFilter=(e)=>{
        e.preventDefault();
        setFiltering(e.target.value);
    }
   
    const addFilter=()=>{
        setMovies(movies.filter(fil=>fil.name.toLocaleLowerCase()===filtering.toLocaleLowerCase().trim()||fil.rate.toString()===filtering.toString()))
    }
    const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => {setShow(true)
        };

        return (
            
            <div>  
            <div style={{padding:10}}>
            <input id='srch' placeholder='Search by rate or by name' onChange={handleFilter} ></input>
            <FcSearch onClick={addFilter}/>
            </div>
            <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-between'}} id='MovieCard'>
            <Router>
            {movies.map((el)=>
        
                <div style={{width:320,border:"solid black",display:'flex',flexDirection:'column',justifyContent:'space-between',marginBottom:10}}>
                <img src={el.img} alt="Avatar" style={{width:320,height:370}} />
                <h3 style={{margin:0,color:"black"}}>{el.name}</h3>
                <h6 style={{margin:5}}>{el.description}</h6>
                <StarRatingComponent 
                name="rate2" 
                starCount={10}
                editing={false}
                value={el.rate}
        />
        <Link to='/trailer' ><button onClick={()=>{setUrl(el.trailer)
        handleShow()
        }}>Trailer</button></Link>
                </div>
                )}
            <Modal show={show} onHide={handleClose} style={{width:1000,height:500}}>
             <Route path='/trailer' render={()=>
            <div style={{display:'flex',justifyContent:'center'}}>
                <ReactPlayer controls url={url} />
            </div>
            } />
            </Modal> 
        </Router>
            </div>
            <br></br>
            <button onClick={AddMovie}>Add movie</button>
            </div>
        )
}
export default MovieCard
