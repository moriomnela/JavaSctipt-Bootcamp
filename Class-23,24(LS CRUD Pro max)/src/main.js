const post_form = document.getElementById("Post-create-form");
const post_area = document.getElementById("post-area");
const post_edit_form = document.getElementById("post-edit-form");
const post_modal = document.getElementById("post-create");
const post_create_btn = document.getElementById("post_create_btn");
const post_update_btn = document.getElementById("post_update_btn");
const  msg =document.querySelector(".msg");




// //get all post and show timeline
 const getAllposts = () => {
  
 const posts = JSON.parse(localStorage.getItem("posts"));


//post loop
if( posts ){
   let posts_data = "";
  posts.reverse().forEach((item,index) => {
    posts_data += `
    <div class="row justify-content-center my-3">
    <div class="col-md-5">
        <div class="card shadow-sm">
            <div class="card-body">
                <div class="author-info">
                    <div class="w-100 d-flex gap-2">
                       <img src="${item.photo}" alt=""> 
                        <div class="author-details">
                            <h3>${item.name}</h3>
                            <span>${timeSayed(item.createdAt)}</span>
                        </div>
                    </div>
                    <div class="w-100 d-flex justify-content-end gap-1">
                        <button data-bs-toggle ="modal" data-bs-target ="#update-post-create" onclick="modalEdit ('${item.id}')"
                        ><i class="fa fa-edit"></i></button>
                        <button onclick="deletePost('${item.id}')"><i class="fa fa-times"></i></button>
                    </div>
                </div>
                <div class="post-content mt-3">
                    <p>${item.post}</p>
                        <img class="w-100" src="${item.post_photo}" alt="">
                 </div>       
                </div>
            </div>
        </div>
    </div>
</div>
    `
  }); 

  post_area.innerHTML = posts_data;
}

 };

 //edit modal
const modalEdit = (id) => {
  const posts = JSON.parse(localStorage.getItem("posts"));

   //get edit post
   const{ name, photo, post, post_photo } = posts.find((data) => data.id == id);

   post_edit_form.querySelector('input[placeholder="Author Name"]').value = name;
   post_edit_form.querySelector('input[placeholder="Author Photo"]').value = photo;
   post_edit_form.querySelector('textarea[placeholder="Post-content"]').value =post;
   post_edit_form.querySelector('input[placeholder="Post-photo"]').value = post_photo;
   post_edit_form.querySelector('input[placeholder="ID"]').value = id;
      
};


 //delete post
const deletePost = (id) => {

const conf = confirm('Are you sure?');   

if(conf) {
   const posts = JSON.parse(localStorage.getItem("posts"));
const updatedPost = posts.filter(data => data.id !==id);
localStorage.setItem('posts',JSON.stringify(updatedPost));
getAllposts ();
}




};

 getAllposts ();




//post-form submitt
post_form.onsubmit = (e) => {
   e.preventDefault();

 //get from data
 const form_data = new FormData(e.target);
 const {name, photo, post, post_photo} = Object.fromEntries(form_data);

 //validation
 if (!name.trim() || !photo.trim()){
   msg.innerHTML = createAlert("All files are required");
 } else {
   const old_data = localStorage.getItem("posts");
   
   let ls_data =[];

   if(old_data){
      ls_data = JSON.parse(old_data);
   }
   ls_data.push({
     id :createID(), 
     name,
     photo,
     post,
     post_photo,
     createdAt : Date.now(),
   });

   localStorage.setItem("posts",JSON.stringify(ls_data));
   

   e.target.reset();
   getAllposts();
   post-create_btn.click(); 
   
 }
};

post_edit_form.onsubmit = (e) => {
e.preventDefault();

const form_data = new FormData(e.target)

const{name, photo, post, post_photo,id} = Object.fromEntries(form_data); 

const data = JSON.parse(localStorage.getItem("posts"));

const updateData = data.map(item => {
  if(item.id == id){
    return{
       ...item,name, photo, post, post_photo,
    }
  }else {
    return item
  }
});

localStorage.setItem("posts",JSON.stringify(updateData));
getAllposts();
post_update_btn.click();
};


