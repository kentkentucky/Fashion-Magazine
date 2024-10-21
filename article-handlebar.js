// add data in array according to article
const articlesData = [
  {
    imageURL: "images/supreme.jpg",
    altText: "supreme image",
    title: "Supreme FW23 Release Date",
    content:
      "Streetwear enthusiasts and fans of the iconic brand Supreme are eagerly counting down the days to the highly anticipated release of Supreme's Fall/Winter 2023 (FW23) collection. While exact details and specific items from the collection remain tightly under wraps, Supreme's loyal following is buzzing with anticipation, as each season promises fresh and innovative designs that capture the spirit of urban culture. Known for its limited drops and collaborations with renowned artists and brands, Supreme's FW23 collection is expected to be no exception, creating a frenzy among collectors and fashion-forward individuals alike. As the release date draws nearer, streetwear aficionados worldwide are preparing for the chance to snag a piece of Supreme's latest offerings, securing their spot in the forefront of contemporary fashion and culture.",
  },
  {
    imageURL: "images/parfum.jpg",
    altText: "image of a perfume sitting on a table",
    title: "New Eau De Parfum Line Drop",
    content:
      "The world of fragrance is about to get a fresh and enticing addition as a new Eau de Parfum (EDP) line prepares to make its debut. With the promise of captivating scents that evoke emotions and memories, this new fragrance collection is generating considerable excitement in the beauty and perfume industry. While specific details about the fragrances and their notes remain shrouded in secrecy, the anticipation for this line's release is undeniable. Eau de Parfum is renowned for its longer-lasting and intense aroma, making it a popular choice for those who seek to leave a lasting impression. As perfume connoisseurs and scent enthusiasts eagerly await the drop of this new EDP line, it's clear that these fragrances are poised to become a must-have addition to any olfactory wardrobe, promising an unforgettable sensorial experience.",
  },
];
function renderArticles() {
  const articleTemplate = document.getElementById("article-template").innerHTML;
  //   compile template
  const compileTemplate = Handlebars.compile(articleTemplate);
  const articlesContainer = document.querySelector(".popular");

  //   loop through array
  articlesData.forEach((articleData) => {
    const articleHTML = compileTemplate(articleData);
    articlesContainer.innerHTML += articleHTML;
  });
}
// call function
renderArticles();
