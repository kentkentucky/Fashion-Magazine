// video data array
// videos URL are from youtube
const videosData = [
  {
    title:
      "Bella Hadid On How Much Prep Really Went Into That Spray On Dress Moment | On Set | Vogue Italia",
    content:
      "In the video 'Bella Hadid On How Much Prep Really Went Into That Spray On Dress Moment | On Set | Vogue Italia,' viewers are treated to an exclusive behind-the-scenes look at the iconic fashion moment when Bella Hadid donned a spray-on dress for Vogue Italia. This candid and revealing interview with Bella Hadid provides invaluable insights into the meticulous preparation and creativity that went into creating a fashion statement that turned heads worldwide. As Bella Hadid shares the details of her experience, viewers gain a deeper appreciation for the artistry and innovation that define the fashion industry, and the video offers a rare glimpse into the collaborative efforts of stylists, designers, and models in bringing avant-garde concepts to life. Whether you're a fashion aficionado or simply curious about the magic that happens behind the scenes, this video promises to be a fascinating and enlightening journey into the world of high fashion and its most memorable moments.",
    videoURL: "https://www.youtube.com/embed/ga3KSHpQO4A?si=FpZYmltQqNV9Vp_9",
  },
  {
    title: "Every Outfit Gigi Hadid Wears in a Week | 7 Days, 7 Looks | Vogue",
    content:
      "In 'Every Outfit Gigi Hadid Wears in a Week | 7 Days, 7 Looks' by Vogue, viewers are granted an intimate and stylish peek into the life of one of the world's most celebrated supermodels. This captivating video chronicles Gigi Hadid's week-long sartorial journey, offering a front-row seat to her enviable fashion choices and providing a delightful showcase of her versatile and ever-evolving style. From casual streetwear to red carpet glamour, each day's outfit serves as a testament to her fashion prowess, making this video a treasure trove of inspiration for fashion enthusiasts and trendsetters eager to witness the model's effortlessly chic transformations. Vogue's masterful storytelling and Gigi Hadid's natural charm combine to create a visual feast that celebrates the artistry and creativity of personal style, leaving viewers inspired and eager to embark on their own fashion adventures.",
    videoURL: "https://www.youtube.com/embed/J_9TDWy7io4?si=0O9NOwId028H2XVw",
  },
];

// render function
function renderVideos() {
  // get html of video-template
  const videoTemplate = document.getElementById("video-template").innerHTML;
  // compile template
  const compileTemplate = Handlebars.compile(videoTemplate);
  const videosContainer = document.querySelector(".video-next");

  // loop through array
  videosData.forEach((videoData) => {
    const videoHTML = compileTemplate(videoData);
    // update html
    videosContainer.innerHTML += videoHTML;
  });
}
// calling function
renderVideos();
