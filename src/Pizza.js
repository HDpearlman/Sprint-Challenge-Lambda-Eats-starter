import React from 'react';
import * as Yup from 'yup';


const Pizza = () =>{
//schema
//name must be at least 2 chars
//toppings (default value false)
//special instructions 'string'

//submitHandler

//form state

//changehandler


    return(
        <div>Pizza form
            <div class='pizza form'>
                <div class='input'>
        <label>Your Name:
        <input type='text'name='name'></input>
        </label>
        </div>

        <div class='input'>
        <label>Pizza Size:
        <select id='size' name='size'>
            <option value='large'>Large</option>
            <option value='medium'>Medium</option>
            <option value='small'>Small</option>
        </select>
        </label>
        </div>

        <div class='input'>Toppings:
        <div>
        <label>steak
        <input type='checkbox' name='steak'></input>
        </label>
        </div>
        <div>
        <label>mushroom
        <input type='checkbox' name='steak'></input>
        </label>
        </div>
        <div>
        <label>onion
        <input type='checkbox' name='steak'></input>
        </label>
        </div>
        <div>
        <label>bacon
        <input type='checkbox' name='steak'></input>
        </label>
        </div>

        </div>

        <div class='input'>
        <label>Special Instructions:
        <textarea name='specialInstructions'></textarea>
        </label>
        </div>

        <button type='submit'>Submit order</button>

{/* //name text input

//dropdown pizza size (small medium large)

//checklist for toppings
//4 checkboxes steak, mushroom , onion, bacon

//text input for special instructions



//submit button 'add to order' */}
</div>
</div>
    )







}


export default Pizza