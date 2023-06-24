import React from "react";
import './Home.css'

export default function HomePage(){
    return (
        <>
        
        <section class="home" id="home">

<div class="content">

    <span>Covid-19</span>
    <h3>stay safe, stay home</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolores quibusdam ad sapiente quod harum recusandae esse voluptates repellat tempore.</p>
    <a href="#" class="btn">protect now</a>

</div>

<div class="image">
    <img src="images/home-img.png" alt=""/>
</div>

</section>



<section class="protect" id="protect">

<h1 class="heading">take steps to <span>protect</span> yourself</h1>

<div class="box-container">

    <div class="box">
        <img src="images/protect-1.png" alt=""/>
        <h3>Wear A Face Mask</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
        <a href="#" class="btn">learn more</a>
    </div>

    <div class="box">
        <img src="images/protect-2.png" alt=""/>
        <h3>Wash Your Hands</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
        <a href="#" class="btn">learn more</a>
    </div>

    <div class="box">
        <img src="images/protect-3.png" alt=""/>
        <h3>Avoid Close Contact</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et ab magni consequatur, quae in repellat. Placeat deserunt vitae alias dignissimos!</p>
        <a href="#" class="btn">learn more</a>
    </div>

</div>

</section>



<section class="symtoms" id="symtoms">

<div class="content">
    <h1 class="heading">What Are The Main <span>Symptoms?</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eos ex, magnam odit quaerat labore amet! Numquam obcaecati nobis possimus.</p>
    <ul>
        <div class="one">
            <li>fever</li>
            <li>Tiredness</li>
            <li>Dry Cough</li>
        </div>
        <div class="two">
            <li>Sore Throat</li>            
            <li>Aches and Pains</li>
            <li>Shortness of Breath</li>
        </div>
    </ul>
    <a href="#" class="btn">know more</a>
</div>

<div class="image">
    <img src="images/symptoms-img.png" alt=""/>
</div>

</section>



<section class="prevent" id="prevent">

<div class="row">

    <div class="image">
        <img src="images/dont-img.png" alt=""/>
    </div>

    <div class="content">
        <h1 class="heading">things <span>not to do</span> during covid</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla, dolor excepturi repellendus officiis expedita saepe veniam minima adipisci tenetur?</p>
        <ul>
            <li>Do Not Share Eating</li>
            <li>Do Not Touch Your Face or Nose</li>
            <li>Do Not Contact Sick People</li>
        </ul>
    </div>

</div>

<div class="row">

    <div class="content">
        <h1 class="heading">things <span>to do</span> during covid</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nulla, dolor excepturi repellendus officiis expedita saepe veniam minima adipisci tenetur?</p>
        <ul>
            <li>Wash Your Hands For 20 sec</li>
            <li>Wear a Mask if Available</li>
            <li>Seek Medical Care Regularly</li>
        </ul>
    </div>

    <div class="image">
        <img src="images/do-img.png" alt=""/>
    </div>

</div>

</section>



<section class="handwash" id="handwash">

<h1 class="heading">how to <span>wash you hand</span> properly</h1>

<div class="box-container">

    <div class="box">
        <span>1</span>
        <img src="images/hadnwash-1.png" alt=""/>
        <h3>Apply Soap on Hand</h3>
    </div>

    <div class="box">
        <span>2</span>
        <img src="images/hadnwash-2.png" alt=""/>
        <h3>Palm to Palm</h3>
    </div>

    <div class="box">
        <span>3</span>
        <img src="images/hadnwash-3.png" alt=""/>
        <h3>Between Fingers</h3>
    </div>

    <div class="box">
        <span>4</span>
        <img src="images/hadnwash-4.png" alt=""/>
        <h3>Back of The Hands</h3>
    </div>

    <div class="box">
        <span>5</span>
        <img src="images/hadnwash-5.png" alt=""/>
        <h3>clean with water</h3>
    </div>

    <div class="box">
        <span>6</span>
        <img src="images/hadnwash-6.png" alt=""/>
        <h3>Use Towel to Dry</h3>
    </div>

</div>

</section>



<section class="spread" id="spread">

<h1 class="heading">how Covid-19 <span>spreads</span> over the world</h1>

<div class="image"></div>

</section>


        </>
    )
}