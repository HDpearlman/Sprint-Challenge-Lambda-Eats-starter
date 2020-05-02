import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
// import axios from 'axios';
import styled from 'styled-components'

const Pizza = () =>{
//schema
const schema = yup.object().shape({
    name: yup.string().min(2).required('need your name'),
    size: yup.string(),
    steak: yup.boolean(),
    mushroom: yup.boolean(),
    onion: yup.boolean(),
    bacon: yup.boolean(),
    specialInstructions: yup.string()

})
//name must be at least 2 chars
//toppings (default value false)
//special instructions 'string'



//form state

const [formState, setFormState] = useState({
    name:'',
    size:'large',
    steak:false,
    mushrooms:false,
    onion:false,
    bacon:false,
    specialInstructions:''

})


//changehandler
const [errors, setErrors] =useState({
    name:''
})

const validateChange = e =>{
    yup.reach(schema, e.target.name).validate(e.target.value).then(valid => {
      setErrors({...errors, [e.target.name]: ''})
    }).catch(err => setErrors({...errors, [e.target.name]: err.errors[0] }))
  }

const changeHandler = e =>{
    e.persist()
    validateChange(e)
    setFormState({...formState, [e.target.name]: e.target.value})
    console.log(formState)
}

//submitHandler
const [buttonState, setButtonState] =useState(true)


const [yourOrder, setYourOrder] = useState()
const handleSubmit = e =>{
    e.preventDefault();
    console.log('your order', formState)
    setYourOrder(formState)
    setFormState({
        name:'',
        size:'large',
        steak:false,
        mushrooms:false,
        onion:false,
        bacon:false,
        specialInstructions:''
    
    })
    

}

useEffect(() => {
    schema.isValid(formState).then(valid => {
    console.log('valid?', valid);
    setButtonState(!valid)
      
    });
  }, [formState]);

    return(
        <div>Pizza form
            <form onSubmit={e => handleSubmit(e)}>
                <div class='input'>
        <label>Your Name:
        <input type='text'name='name' onChange={e => changeHandler(e)}></input>
        </label>
        </div>

        <div class='input'>
        <label>Pizza Size:
        <select onChange={e => changeHandler(e)} id='size' name='size'>
            <option value='large'>Large</option>
            <option value='medium'>Medium</option>
            <option value='small'>Small</option>
        </select>
        </label>
        </div>

        <div class='input'>Toppings:
        <div>
        <label>steak
        <input type='checkbox' name='steak' value={true} onChange={e => changeHandler(e)}></input>
        </label>
        </div>
        <div>
        <label>mushroom
        <input type='checkbox' name='mushroom' value={true} onChange={e => changeHandler(e)}></input>
        </label>
        </div>
        <div>
        <label>onion
        <input type='checkbox' name='onion' value={true} onChange={e => changeHandler(e)}></input>
        </label>
        </div>
        <div>
        <label>bacon
        <input type='checkbox' name='bacon' value={true} onChange={e => changeHandler(e)}></input>
        </label>
        </div>

        </div>

        <div class='input'>
        <label>Special Instructions:
        <textarea name='specialInstructions' onChange={e => changeHandler(e)}></textarea>
        </label>
        </div>

        <button disabled={buttonState} type='submit'>Submit order</button>
        </form>

        <div><pre>{JSON.stringify(yourOrder, null, 2)}</pre></div>

{/* //name text input

//dropdown pizza size (small medium large)

//checklist for toppings
//4 checkboxes steak, mushroom , onion, bacon

//text input for special instructions



//submit button 'add to order' */}

</div>
    )







}


export default Pizza