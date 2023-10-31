
import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'
import './App.css';
import './style.css';
import f1 from'./f1.jpg'
import f2 from'./f2.jpg'
import f3 from './f3.jpg'
import f4 from './f4.jpg'
import f5 from './f5.jpg'
import f6 from './f6.jpg'
import f11 from './f11.jpg'
import L1 from './L1.jpg'

function App() {
  return (
    <div>
    <div className="wrap">

<div className="header">


<div class="MenuWrap">
		<a href="#" class="ListItem">Home</a>
		<a href="#" class="ListItem">About Us</a>
		<a href="#" class="ListItem">Products</a>
		<a href="#" class="ListItem">Policy</a>
		<a href="#" class="LastItem">Contact Us</a>
	</div>




</div>
		<div className="wrapMiddle">
			<div className="left">

      <img src={f2} style={{
          borderRadius: "50%",
          width: 100,
          height: 100,
          background: "red",
          display: "block"
        }} alt="Guardians of the Galaxy"/>


      </div>
      <BrowserRouter>
			<div className="middle">
<table>
  <tr>
    <td>
   <div className="Item">
		
      <img src={f1} style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          background: "red",
          display: "block",
          margin: "10px"
          
        }} alt="Guardians of the Galaxy"/>
<h1 className='Caption'><Link to="https://www.imdb.com/title/tt5537002/?ref_=adv_li_tt">Killers of the flower moon</Link></h1>
</div>
</td>
<td>

<div className="Item">
<img src={f2} style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          background: "red",
          display: "block",
          margin: "10px"
        }} alt="Guardians of the Galaxy"/>
<h1 className='Caption'><Link to="https://www.imdb.com/title/tt13159924/?ref_=adv_li_tt">Gen V</Link></h1>
</div>
</td>
<td>
<div className="Item">
<img src={f3} style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          background: "red",
          display: "block",
          margin: "10px"
        }} alt="Guardians of the Galaxy"/>
<h1 className='Caption'><Link to="https://www.imdb.com/title/tt17720272/?ref_=adv_li_tt">Goosebumbs</Link></h1>
</div>

</td>
<td>
<div className="Item">
<img src={f4} style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          background: "red",
          display: "block",
          margin: "10px"
        }} alt="Guardians of the Galaxy"/>
  <h1 className='Caption'><Link to="https://www.imdb.com/title/tt13274016/?ref_=adv_li_tt">Reptile</Link></h1>    	
  </div>      
		
  </td>

   
		</tr>

    <tr>


    <td>  

<div className="Item">
<img src={f5} style={{
        borderRadius: "50%",
        width: 150,
        height: 150,
        background: "red",
        display: "block",
        margin: "10px"
      }} alt="Guardians of the Galaxy"/>
<h1 className='Caption'><Link to="https://www.imdb.com/title/tt5648882/?ref_=adv_li_tt">The Burial</Link></h1>    	
</div> 

</td>   

      <td>
      <div className="Item">
<img src={f6} style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          background: "red",
          display: "block",
          margin: "10px"
        }} alt="Guardians of the Galaxy"/>
  <h1 className='Caption'><Link to="https://www.imdb.com/title/tt13911628/?ref_=adv_li_tt">Lessons in Chemistry</Link></h1>    	
  </div> 

      </td>
    </tr>
   

 </table>
		
      </div>

      </BrowserRouter>


      
			<div className="right">

      <img src={f2} style={{
          borderRadius: "50%",
          width: 100,
          height: 100,
          background: "red",
          display: "block"
        }} alt="Guardians of the Galaxy"/>


      </div>
		</div>
		<div className="footer"></div>

    </div>
    </div>
  );
}

export default App;
