import React from 'react'
import { useState } from 'react';
import './newpost.css'
import Axios from 'axios'

const NewPost = () => {

  const [posts, setPosts] = useState([])


  const [image, setImage] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')



  const addPost = async (e) => {
    const res = await Axios.post('http://localhost:3001/posts/create', {
      image: image,
      city: city,
      country: country,
    })
    setImage ('')
    setCity ('')
    setCountry ('')
    let tempArray = [...posts]
    let tempObj = { ...res.data }
    tempArray.push(tempObj)
    setPosts(tempArray)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addPost(e)
    window.location.reload(false)
  }

  const changeImage = (event) => {
    let e = event.target.value
    setImage(e)
  }

    const changeCity = (event) => {
    let e = event.target.value
    setCity(e)
  }

  const changeCountry = (event) => {
    let e = event.target.value
    setCountry(e)
  }

  return (
    <div id="postContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">Photo:</label>
          <input className='formInput'
                      type="text"
                      onChange={changeImage}
                      name={'image'}
                      id="image"
                      required
                      value= {image}
                      placeholder={'image'}
                      />
        </div>
        <div>
          <label htmlFor="photo">City:</label>
          <input className='formInput'
                    type="text"
                    onChange={changeCity}
                    name={'city'}
                    id="city"
                    required
                    value= {city}
                    placeholder={'city'}
                    />
        </div>
        <div>
          <label htmlFor="photo">Country:</label>
          <input className='formInput'
                    type="text"
                    onChange={changeCountry}
                    name={'country'}
                    id="country"
                    required
                    value= {country}
                    placeholder={'country'}
                  />
        </div>



        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default NewPost;