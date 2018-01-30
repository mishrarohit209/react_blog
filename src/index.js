import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="Banner">
        <h1>Blog</h1>
        <section className="card-module featured">
        <a href="" className="card featured-story layout-x-large">
       	<div className="card-image media">
<div className="spacer">
</div>
<img src="https://images.britcdn.com/wp-content/uploads/2018/01/galentines-day-promo-header.jpg?w=1024&amp;auto=format" className="fade-in loaded"/>
</div>
<div className="card-information"><div className="card-category header-5 header-secondary">DIY Recipes</div><h1 className="header-primary">These Brit + Co Desserts Are Galentine’s Day Approved</h1> 
<div className="card-excerpt">Celebrate with your best gals the sweetest way.</div> 
<div className="read-more link-secondary-solid header-4 header-secondary">Read More</div>
</div>
</a>
</section>  

<section className="card-module layout-x-large ">
<h2>Today's Must Reads</h2>
<div className="grid-col-3">
<a href="">
<div className="card-image media"><div className="spacer three-quarter"></div> 
<img className="fade-in loaded" src="https://images.britcdn.com/wp-content/uploads/2018/01/verona-italy-promo.jpg?w=300&amp;auto=format"/></div> 
<div className="card-information"><div className="card-category header-5 header-secondary">Lifestyle</div> 
<div className="card-title"><span>Why Verona, Italy Truly Is the City of Love</span></div> 
<div className="card-author"><span className="author desktop-only">Lesley Chen</span><span className="desktop-only"> · </span>2 days ago</div></div>
</a>

<a href="https://www.brit.co/4-exercises-for-people-who-dont-like- exercise/" className="card card-dense--mobile ">
<div className="card-image media"><div className="spacer three- quarter"></div> 
<img className="fade-in loaded" src="https://images.britcdn.com/wp-content/uploads/2018/01/easyexercise00-800x800.jpg?w=300&auto=format"/></div>
<div className="card- information"><div className="card-category header-5 header-secondary">Health</div> 
<div className="card-title"><span>4 Exercises for People Who Don’t Like Exercise</span></div> 
<div className="card- author"><span className="author desktop-only">Ashley Abramson</span>
<span className="desktop-only"> · </span>2 days ago</div></div>
</a>

<a href="https://www.brit.co/4-exercises-for-people-who-dont-like- exercise/" className="card card-dense--mobile ">
<div className="card-image media"><div className="spacer three- quarter"></div> 
<img className="fade-in loaded" src="https://images.britcdn.com/wp-content/uploads/2018/01/red-lipstick.jpg?w=300&auto=format"/></div>
<div className="card- information"><div className="card-category header-5 header-secondary">Beauty</div> 
<div className="card-title"><span>4 Exercises for People Who Don’t Like Exercise</span></div> 
<div className="card- author"><span className="author desktop-only">Ashley Abramson</span>
<span className="desktop-only"> · </span>2 days ago</div></div>
</a>
</div>
</section> 

<section className="card-module layout-x-large "><h2>Beauty Essentials</h2> <div class="grid-col-4"><a href="https://www.brit.co/beautyblender-mac-collaboration/" class="card card-dense--mobile "><div class="card-image media"><div class="spacer "></div> <img class="fade-in loaded" src="https://images.britcdn.com/wp-content/uploads/2018/01/beautyblender.jpg?w=300&amp;auto=format"/></div> <div class="card-information"><div class="card-category header-5 header-secondary">Beauty</div> <div class="card-title"><span>You’ll Soon Be Able to Stock Up on Beautyblenders at *This* Iconic Makeup Brand’s Stores</span></div> <div class="card-author"><span class="author desktop-only">Sophie Wirt</span><span class="desktop-only"> · </span>27 days ago</div></div></a><a href="https://www.brit.co/best-beauty-products-of-2017/" class="card card-dense--mobile "><div class="card-image media"><div class="spacer "></div> <img class="fade-in loaded" src="https://images.britcdn.com/wp-content/uploads/2017/12/frank-body-shimmer-scrub2.jpg?w=300&amp;auto=format"/></div> <div class="card-information"><div class="card-category header-5 header-secondary">Beauty</div> <div class="card-title"><span>The 20 Best New Beauty Products That Launched in 2017</span></div> <div class="card-author"><span class="author desktop-only">Beth Wischnia</span><span class="desktop-only"> · </span>Dec 30, 2017</div></div></a><a href="https://www.brit.co/best-celebrity-tattoos-of-2017/" class="card card-dense--mobile "><div class="card-image media"><div class="spacer "></div> <img class="fade-in loaded" src="https://www.brit.co/wp-content/uploads/2017/12/MileyCyrus-@mileycyrus.jpg?w=300&amp;auto=format"/></div> <div class="card-information"><div class="card-category header-5 header-secondary">Beauty</div> <div class="card-title"><span>14 of the Best Celebrity Tattoos of 2017</span></div> <div class="card-author"><span class="author desktop-only">Kristen Bousquet</span><span class="desktop-only"> · </span>Dec 30, 2017</div></div></a><a href="https://www.brit.co/top-selling-beauty-products-cvs-drugstore-2017/" class="card card-dense--mobile "><div class="card-image media"><div class="spacer "></div> <img class="fade-in loaded" src="https://images.britcdn.com/wp-content/uploads/2017/12/nyx-matte-finish.jpg?w=300&amp;auto=format"/></div> <div class="card-information"><div class="card-category header-5 header-secondary">Beauty</div> <div class="card-title"><span>These Are 2017’s Top Selling Drugstore Beauty Products from CVS</span></div> <div class="card-author"><span class="author desktop-only">Sophie Wirt</span><span class="desktop-only"> · </span>Dec 29, 2017</div></div></a></div></section>

      </div>
    
    );
  }
}

// ========================================

ReactDOM.render(
  <ShoppingList />,
  document.getElementById('root')
);
