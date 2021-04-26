import React from 'react'

function Footer() {
    return (
      <footer id="footer" class="hoc clear">
        <div class="one_quarter first">
          <h6 class="heading">Nulla tincidunt eget</h6>
          <ul class="nospace btmspace-30 linklist contact">
            <li>
              <i class="fa fa-phone"></i> (858) 353 4735
            </li>
            <li>
              <i class="fa fa-envelope-o"></i> tipler.julian@gmail.com
            </li>
            <li>
              <i class="fa fa-linkedin"></i>
              https://www.linkedin.com/in/julian-t-87a2a0a4/
            </li>
          </ul>
        </div>
        <div class="one_quarter">
          <h6 class="heading">Elit eros imperdiet</h6>
          <ul class="nospace linklist">
            <li>
              <a href="#">Aenean venenatis leo</a>
            </li>
            <li>
              <a href="#">In nunc elementum sed</a>
            </li>
            <li>
              <a href="#">Commodo nibh congue</a>
            </li>
            <li>
              <a href="#">Donec porttitor nec</a>
            </li>
            <li>
              <a href="#">Ex id egestas in feugiat</a>
            </li>
          </ul>
        </div>
        <div class="one_quarter">
          <h6 class="heading">Placerat enim nulla</h6>
          <article class="btmspace-30">
            <h6 class="nospace font-x1">
              <a href="#">Mollis sed dui tempus</a>
            </h6>
            <time class="smallfont" datetime="2045-04-06">
              Friday, 6<sup>th</sup> April 2045
            </time>
            <p>
              Fusce sodales hendrerit neque dictum porttitor curabitur&hellip;
            </p>
          </article>
          <article>
            <h6 class="nospace font-x1">
              <a href="#">Ultrices posuere justo</a>
            </h6>
            <time class="smallfont" datetime="2045-04-05">
              Thursday, 5<sup>th</sup> April 2045
            </time>
            <p>
              Id tincidunt tellus consequat volutpat ut finibus libero&hellip;
            </p>
          </article>
        </div>
        <div class="one_quarter">
          <h6 class="heading">Consectetur orci cras</h6>
          <p class="nospace btmspace-15">
            Congue eget dolor ac tristique non sapien vulputate ornare enim eu
            egestas ipsum.
          </p>
          <form method="post" action="#">
            <fieldset>
              <legend>Newsletter:</legend>
              <input
                class="btmspace-15"
                type="text"
                value=""
                placeholder="Name"
              />
              <input
                class="btmspace-15"
                type="text"
                value=""
                placeholder="Email"
              />
              <button type="submit" value="submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </footer>
    );
}

export default Footer
