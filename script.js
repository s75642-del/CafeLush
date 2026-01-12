// active navigation highlight
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#6b4e2e";
        link.style.textDecoration = "underline";
    }
});
// contact form submission message
const contactForm = document.querySelector("form");

if (contactForm && contactForm.action.includes("mindspun")) {
    contactForm.addEventListener("submit", function () {
        alert("Thank you for contacting Cafe Lush ☕\nWe will get back to you soon!");
    });
}
// menu item hover animation
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(item => {
    item.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s";
    });
    item.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });
});
// order now page functionality
const orderForm = document.getElementById("orderForm");
const orderTable = document.getElementById("orderTable");

if (orderForm && orderTable) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const tableNo = document.getElementById("tableNumber").value;
        const menu = document.getElementById("menuItem").value;
        const quantity = document.getElementById("quantity").value;

        if (tableNo === "" || quantity === "" || quantity <= 0) {
            alert("Please enter a valid table number and quantity");
            return;
        }
        const row = orderTable.insertRow();
        row.insertCell(0).innerText = tableNo;
        row.insertCell(1).innerText = menu;
        row.insertCell(2).innerText = quantity;

        alert("Order added successfully ☕");
        orderForm.reset();
    });
}
// order now button click (log)
const orderBtn = document.querySelector(".order-btn");
if (orderBtn) {
    orderBtn.addEventListener("click", function () {
        console.log("Order Now button clicked");
    });
}
// submit order & status update
const submitOrderBtn = document.getElementById("submitOrderBtn");
const orderStatusText = document.querySelector("#orderStatus span");

if (submitOrderBtn && orderStatusText) {
    submitOrderBtn.addEventListener("click", function () {
        // Check if there is at least one order
        if (orderTable.rows.length <= 1) {
            alert("Please add at least one order before submitting.");
            return;
        }
        // Change status to Prepared
        orderStatusText.innerText = "Prepared";
        orderStatusText.style.color = "#b07d3c";
        // Simulate preparation time
        setTimeout(() => {
            orderStatusText.innerText = "Done";
            orderStatusText.style.color = "green";
            alert("Your order is ready! ☕🍰");
        }, 3000); // 3 seconds
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});