import { useState, useEffect} from 'react'
import axios from 'axios'


const Joke = () => {
    const [joke, setJoke] = useState("")
     
    const fetchJoke = async() =>{
     try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Programming")
        if (response.data.type === "single") {
            setJoke(response.data.joke)
        }
        else{
            setJoke(`${response.data.setup}\n${response.data.delivery}`)
        }
     } catch (error) {
        setJoke("faild to fetch joke, try agian")
         console.log("Error:", error);
     }
    }
   
    //fetch joke 
    useEffect(()=>{
        fetchJoke();
    },[]);


  return (
    <div className='text-center mt-10'>
    <div className='bg-white rounded-3xl w-auto lg:w-3xl px-10 py-10 shadow-lg mx-auto mb-10'>
   <p className='text-2xl mb-30 text-black'>{joke}</p>
   </div>
   <button onClick={fetchJoke} className='bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-10 py-4 rounded-lg  w-60 cursor-pointer mb-10 font-medium text-xl'> Get New Joke</button>
   
    </div>
  )
}

export default Joke
