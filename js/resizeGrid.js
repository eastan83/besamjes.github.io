const grid = document.querySelector(".container");
const allItems = document.querySelectorAll(".item");

const resizeGridItem = (item) => {
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
  rowSpan = Math.ceil((item.querySelector(".content").getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = `span ${rowSpan}`;
}

const resizeAllGridItems = () => {
  allItems.forEach(ele => {
    resizeGridItem(ele);
  });
}

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);