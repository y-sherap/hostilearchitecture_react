import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import './newpostform.css'

const NewPostForm = () => {

  const [posts, setPosts] = useState([])


  const [image, setImage] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')


  const addPost = async (e) => {
    const res = await Axios.post('http://localhost:3001/posts/:id', {
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
    <div id="formContainer">
      <form onSubmit={handleSubmit}>
        <div id="formTitle">
          Submit a post
        </div>
        <div>
          <input className='formInput'
                      type="text"
                      onChange={changeImage}
                      name={'image'}
                      id="image"
                      required
                      value= {image}
                      placeholder={'Image URL'}
                      />
        </div>
        <div>
          <input className='formInput'
                    type="text"
                    onChange={changeCity}
                    name={'city'}
                    id="city"
                    required
                    value= {city}
                    placeholder={'City'}
                    />
        </div>
        <div>
          <input className='formInput'
                    type="text"
                    onChange={changeCountry}
                    name={'country'}
                    id="country"
                    required
                    value= {country}
                    placeholder={'Country'}
                  />
        </div>
        <div>
          <button type='submit'>GO</button>
        </div>

      </form>
    </div>
  );
};

export default NewPostForm;