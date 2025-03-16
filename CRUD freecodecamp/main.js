let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

// Klik form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  formValidation();
});

// Form validation
let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

// Update/Add data
let editingPost = null;

let acceptData = () => {
  if (editingPost) {
    editingPost.querySelector("p").innerHTML = input.value;
    editingPost = null; 
  } else {
    let post = document.createElement("div");
    post.innerHTML = `
          <p>${input.value}</p>
          <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
          </span>
        `;
    posts.appendChild(post);
  }

  input.value = ""; 
};

// Edit data
let editPost = (e) => {
    editingPost = e.parentElement.parentElement;
    input.value = editingPost.querySelector("p").innerHTML;
  };

// Delete data
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};


