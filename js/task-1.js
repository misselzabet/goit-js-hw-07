const firstTaskList = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${firstTaskList.length}`);
firstTaskList.forEach((category) => {
const firstTaskTitle = category.querySelector('h2').textContent;
const firstTaskIitemCount = category.querySelectorAll('ul li').length;
console.log(`Category: ${firstTaskTitle}`);
console.log(`Elements: ${firstTaskIitemCount}`);


});
