const numberCategoriesEl = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberCategories.length}`);
numberCategories.forEach(item => {
 console.log(`Category: ${item.querySelector("h2").innerText}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
    