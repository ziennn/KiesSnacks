
$(document).ready(function(){
  		$('.payment_nama').click(function(){
  		$('.payment_nama').css('border','2px solid #86c232');
  		$('.payment_vietinbank').css('border','1px solid #d7d7d7');	
  		$('.payment_donga').css('border','1px solid #d7d7d7');	
  		$('.payment_sacom').css('border','1px solid #d7d7d7');	
  		});
  	});
$(document).ready(function(){
  		$('.payment_sacom').click(function(){
  		$('.payment_sacom').css('border','2px solid #86c232');
  		$('.payment_vietinbank').css('border','1px solid #d7d7d7');	
  		$('.payment_donga').css('border','1px solid #d7d7d7');
  		$('.payment_nama').css('border','1px solid #d7d7d7');		
  		});
  	});

/*--------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------*/
window.onscroll = function() {
    myFunction()
};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 120) {
    document.getElementById("menu").className = "scroll_event_Add_class";
  } else {
    document.getElementById("menu").className = "";
  }
}
/*--------------------------------------------------------------------------------------------*/
function move_login(){
        document.getElementById("login_box").style.display = 'block';
        document.getElementById("signup_box").style.display = 'none';
    }
/*--------------------------------------------------------------------------------------------*/
function move_signup(){
        document.getElementById("login_box").style.display = 'none';
        document.getElementById("signup_box").style.display = 'block';
    }
/*--------------------------------------------------------------------------------------------*/
$(document).ready(function(){
$('#menu_account_login').on('click',function(){
$('.khung').toggleClass('menu_account_show');
});
});
/*--------------------------------------------------------------------------------------------*/
function checkout(){
    	document.getElementById("payment_form").style.display = 'block';
    	document.getElementById("checkout_form").style.display = 'none';
    }
/*--------------------------------------------------------------------------------------------*/
var bank;
     function nama(){
     bank = "GCash";
    }
     function sacom(){
     bank = "Cash On Delivery";
    }
/*--------------------------------------------------------------------------------------------*/
function management_web(){
    document.getElementById("list_food_home").style.display = 'none';
    document.getElementById("management_food").style.display = 'block';	
    }
/*--------------------------------------------------------------------------------------------*/ 	
function home_page(){
    document.getElementById("list_food_home").style.display = 'block';
    document.getElementById("management_food").style.display = 'none';
    listFood();
 	}
/*--------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------*/
var id_order_food =JSON.parse(localStorage.getItem('id_order_food'));
if (id_order_food === null) {
        id_order_food = [];
        var id_order_food =0;
        localStorage.setItem("id_order_food", JSON.stringify(id_order_food));
    }
/*--------------------------------------------------------------------------------------------*/
var commentCustomer =JSON.parse(localStorage.getItem('commentCustomer'));
if (commentCustomer === null) {
        commentCustomer = [];
        var commentCustomer =[{}];
        localStorage.setItem("commentCustomer", JSON.stringify(commentCustomer));
    }
/*--------------------------------------------------------------------------------------------*/
var id_payment =JSON.parse(localStorage.getItem('id_payment'));
if (id_payment === null) {
        id_payment = [];
        var id_payment = 0;
        localStorage.setItem("id_payment", JSON.stringify(id_payment));
    }
/*--------------------------------------------------------------------------------------------*/ 
var idup =JSON.parse(localStorage.getItem('idup'));
if (idup === null) {
        idup = [];
        var idup=3;
         localStorage.setItem("idup", JSON.stringify(idup));
    }
/*--------------------------------------------------------------------------------------------*/
var CheckInfo =JSON.parse(localStorage.getItem('CheckInfo'));
if (CheckInfo === null) {
        CheckInfo = [];
        var CheckInfo = 0;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
    }
/*--------------------------------------------------------------------------------------------*/
var food =JSON.parse(localStorage.getItem('food'));
if (food === null) {
        food = [];
    }
/*--------------------------------------------------------------------------------------------*/
var account =JSON.parse(localStorage.getItem('account'));
if (account === null) {
        account = [];
        var account = [{
    id:0,
    username:"admin",
    password:"123456",
    level:1
},{
    id:1,
    username:"user",
    password:"user",
    level:0 
},{
    id:2,
    username:"zien",
    password:"zien",
    level:0 
}];
    localStorage.setItem("account", JSON.stringify(account));
}
/*--------------------------------------------------------------------------------------------*/
var food =JSON.parse(localStorage.getItem('food'));
if (food === null) {
        food = [];
        food = [{
    
    id:0,
    name:"Blueberry<br>Soda",
    price:"70",
    note: "16oz",     
    image:"images/SODA&FRUITTEA/blueberrySoda.png"
},{
    id:1,
    name:"Lychee<br>Soda",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/LycheeSoda.png"
},{
    id:2,
    name:"Strawberry<br>Soda",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/strawberrySoda.png"
},{
    id:3,
    name:"Under The<br>Sea Soda",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/underTheSeaSoda.png"
},{
    id:4,
    name:"Wintermelon<br>Soda",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/wintermelonSoda.png"
},{
    id:5,
    name:"Blue Lemonade<br>Fruit Tea",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/blueLemonadeFruitTea.png"
},{
    id:6,
    name:"Green Apple<br>Fruit Tea",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/greenAppleFruitTea.png"
},{
    id:7,
    name:"Strawberry<br>Fruit Tea",
    price:"70",
    note: "16oz",
    image:"images/SODA&FRUITTEA/strawberryFruitTea.png"
},{
    id:8,
    name:"Mango<br>Graham<br>Milkshake",
    price:"75",
    note: "16oz",
    image:"images/MILKSHAKE&FRUITSHAKE/mangoGraham.png"
},{
    id:9,
    name:"Avocado<br>Graham<br>Milkshake",
    price:"75",
    note: "16oz",
    image:"images/MILKSHAKE&FRUITSHAKE/avocadoGraham.png"
},{
    id:10,
    name:"Choco Kisses<br>Graham<br>Milkshake",
    price:"75",
    note: "16oz",
    image:"images/MILKSHAKE&FRUITSHAKE/chocoKissesGraham.png" 
},{
    id:11,
    name:"Ube<br>Macapuno<br>Overload",
    price:"85",
    note: "24oz",
    image:"images/MILKSHAKE&FRUITSHAKE/ubeMacapunoOverload.png"
},{
    id:12,
    name:"Blueberry<br>Oreo<br>Cheesecake",
    price:"80",
    note: "24oz",     
    image:"images/MILKSHAKE&FRUITSHAKE/blueberryOreoCheesecake.png"
},{
    id:13,
    name:"Strawberry<br>Oreo<br>Cheesecake",
    price:"80",
    note: "24oz",
    image:"images/MILKSHAKE&FRUITSHAKE/strawberryOreoCheesecake.png"
},{
    id:14,
    name:"Lychee<br>Oreo<br>Cheesecake",
    price:"80",
    note: "24oz",
    image:"images/MILKSHAKE&FRUITSHAKE/lycheeOreoCheesecake.png"
},{
    id:15,
    name:"Special<br>Leche Flan<br>Overload",
    price:"85",
    note: "24oz",
    image:"images/MILKSHAKE&FRUITSHAKE/lecheFlanOverload.png"
},{
    id:16,
    name:"Choco Nutella",
    price:"85",
    note: "24oz",
    image:"images/MILKTEAS/ChocoNutellaCheesecake.png"
},{
    id:17,
    name:"Dark Chocolate",
    price:"85",
    note: "24oz",
    image:"images/MILKTEAS/DarkChocolateCheesecake.png"
},{
    id:18,
    name:"Salted Caramel",
    price:"85",
    note: "24oz",
    image:"images/MILKTEAS/SaltedCaramelCheesecake.png"
},{
    id:19,
    name:"Choco Mousse",
    price:"85",
    note: "24oz",
    image:"images/MILKTEAS/ChocolateMousseCheesecake.png"
},{
    id:20,
    name:"Choco Cream<br>Puff",
    price:"70",
    note: "16oz",
    image:"images/MILKTEAS/ChocoCreamPuff.png"
},{
    id:21,
    name:"Okinawa<br>Cheesecake",
    price:"70",
    note: "16oz",
    image:"images/MILKTEAS/OkinawaCheesecake.png"
},{
    id:22,
    name:"Tiger King<br>Milktea",
    price:"70",
    note: "16oz",
    image:"images/MILKTEAS/TigerKing.png" 
},{
    id:23,
    name:"Tokyo Matcha<br>Milktea",
    price:"70",
    note: "16oz",
    image:"images/MILKTEAS/TokyoMatcha.png"
}];
        localStorage.setItem("food", JSON.stringify(food)); 
    }
/*--------------------------------------------------------------------------------------------*/
// var orderFood=[]; 
var orderFood =JSON.parse(localStorage.getItem('orderFood'));
if (orderFood === null) {
        orderFood = [{}];
        localStorage.setItem("orderFood", JSON.stringify(orderFood));
    }
/*--------------------------------------------------------------------------------------------*/
var account_info =JSON.parse(localStorage.getItem('account_info'));
if (account_info === null) {
        account_info = [];
        var account_info=[{}];
        localStorage.setItem("account_info", JSON.stringify(account_info));
    }
/*--------------------------------------------------------------------------------------------*/ 
var checkLogin =JSON.parse(localStorage.getItem('checkLogin')); 
if (checkLogin === null) {
        checkLogin = [];
        var checkLogin = -1;
        localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
    }
if (checkLogin == -1) {
	
}
else if( account[checkLogin].level==0){
	    document.getElementById("statusLogin").innerHTML="Login Successful";
        document.getElementById("menu_account_login").innerHTML = account[checkLogin].username;
        document.getElementById("menu_account_login").style.display = 'block';
        document.getElementById("menu_login_button").style.display = 'none';
        document.getElementById("hello_user").innerHTML ="Hello, "+account[checkLogin].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("quanlydon").style.display = 'none';
        orderprinf();
        demOrder();
}
else if( account[checkLogin].level==1){
        document.getElementById("statusLogin").innerHTML="Login Successful";
        document.getElementById("menu_account_login").innerHTML = account[checkLogin].username;
        document.getElementById("menu_account_login").style.display = 'block';
        document.getElementById("menu_login_button").style.display = 'none';
        document.getElementById("hello_user").innerHTML ="Hello, "+account[checkLogin].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("quanlydon").style.display = 'block';
        orderprinf(); 
        demOrder();  
}
/*--------------------------------------------------------------------------------------------*/
var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
if (paymentFood === null) {
        paymentFood = [];
        var paymentFood=[{}];
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
    }
/*--------------------------------------------------------------------------------------------*/
console.log(account);
// localStorage.setItem("checkLogin", JSON.stringify(checkLogin));


//Sign up for User and Admin
function Signup(){
    var checkUsername = 0;
    var id=idup;
    var level=0;
    var username = document.getElementById('usernameSignup').value;
    var password = document.getElementById('passwordSignup').value; 
    var Repassword = document.getElementById('RepasswordSignup').value;
    
    if (username != '' && password !='' && Repassword !='' && password == Repassword) {
      for(let i = 0; i < account.length; i++) {
        if (account[i].username== username) {
           checkUsername = 1;
            break;
        }
      } 
        if (checkUsername == 0) {
            accountSignup = {id,username,password,level};
            account.push(accountSignup);

            localStorage.setItem("account", JSON.stringify(account));

            checkLogin = id;
            localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

            var id=idup++;
            localStorage.setItem("idup", JSON.stringify(idup));
            console.log(account); 
            document.getElementById("statusSignup").innerHTML="Successfully Created an Account.";
            document.getElementById("menu_account_login").innerHTML = username;
            document.getElementById("menu_account_login").style.display = 'block';
            document.getElementById("menu_login_button").style.display = 'none';
            document.getElementById("hello_user").innerHTML ="Hello, "+username+"!";
            document.getElementById("menu_logout").style.display = 'block'; 
            location.reload();
        }else { 
            document.getElementById("statusSignup").innerHTML="User already exist. Please create new.";
        }
    }else {
        document.getElementById("statusSignup").innerHTML="Password does not match.";
    }
}
/*--------------------------------------------------------------------------------------------*/
//Login for User and Admin 
function Login(){ 
  for (i = 0; i< account.length; i++){
    if ((document.getElementById("usernameLogin").value == account[i].username) && (document.getElementById("passwordLogin").value == account[i].password)) {
      checkLogin = account[i].id; 
      localStorage.setItem("checkLogin", JSON.stringify(checkLogin)); 
       
      if (account[i].level==0) {
        document.getElementById("statusLogin").innerHTML="Login Successful";
        document.getElementById("menu_account_login").innerHTML = account[i].username;
        document.getElementById("menu_account_login").style.display = 'none';
        document.getElementById("menu_login_button").style.display = 'block';
        document.getElementById("hello_user").innerHTML ="Hello, "+account[i].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("quanlydon").style.display = 'none';
        orderprinf();
       demOrder();
      
       location.reload();
        
      }else if(account[i].level==1){
        document.getElementById("statusLogin").innerHTML="Login Successful.";
        document.getElementById("menu_account_login").innerHTML = account[i].username;
        document.getElementById("menu_account_login").style.display = 'block';
        document.getElementById("menu_login_button").style.display = 'none';
        document.getElementById("hello_user").innerHTML ="Hello, "+account[i].username+"!";
        document.getElementById("menu_logout").style.display = 'block'; 
        document.getElementById("quanlydon").style.display = 'block';
        orderprinf(); 
        demOrder();  
        location.reload();           
      }     
    }
  }
    if (checkLogin == -1) {
        document.getElementById("statusLogin").innerHTML="Incorrect Username/Password. Try Again.";

    }
}
/*--------------------------------------------------------------------------------------------*/
//Deleting Item
function delete_order(id_order){
  for(var i = 0; i < orderFood.length; i++){
        if(id_order == orderFood[i].id_order && checkLogin == orderFood[i].user_id_order) {
            orderFood.splice(i, 1);
            localStorage.setItem("orderFood", JSON.stringify(orderFood));
            orderprinf(); 
            demOrder();
            break;          
        }
    }
}
/*--------------------------------------------------------------------------------------------*/
//Total money in My Cart
function totalMoney(checkLogin){
  var total_order =0;
  for(let i = 0; i < orderFood.length; i++) {
    if (checkLogin == orderFood[i].user_id_order){
      total_order += orderFood[i].price_order*orderFood[i].quanlity_order;   
    }
  }
    document.getElementById("total_money").innerHTML ="P "+total_order; 
}
/*--------------------------------------------------------------------------------------------*/
//Setting quantity
function upQuality(id_order){
  var ok=0;
  for(let i = 0; i < orderFood.length; i++) {
    if (id_order == orderFood[i].id_order && checkLogin == orderFood[i].user_id_order) {
       var quality_input_change =document.getElementById('quality_input_change'+i).value;
      orderFood[i].quanlity_order=quality_input_change;
       ok += orderFood[i].price_order *orderFood[i].quanlity_order;
       localStorage.setItem("orderFood", JSON.stringify(orderFood));
       orderprinf();
    }
  }   
}

document.getElementById("name_customer").value = account[checkLogin].username;
document.getElementById("phone_customer").value = account_info[checkLogin].phone_customer;
document.getElementById("address_customer").value = account_info[checkLogin].address_customer;

for(let i = 0; i < orderFood.length; i++) {
    if (account_info[i].accountPayment==account[checkLogin].id) {
        CheckInfo = 1;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
    }else {
        CheckInfo = 0;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
    }
}
/*--------------------------------------------------------------------------------------------*/
function payment(){
    var id_payment =JSON.parse(localStorage.getItem('id_payment'));
    var name_customer = document.getElementById("name_customer").value;  
	var phone_customer = document.getElementById("phone_customer").value;
	var address_customer = document.getElementById("address_customer").value;  
    var status = "Waiting For Confirmation";
    var priceTotal=0;
      paymentarrpush();
      for(let i = 0; i < orderFood.length; i++) {
        if (orderFood[i].user_id_order==checkLogin) {
          priceTotal +=orderFood[i].price_order*orderFood[i].quanlity_order;
          quanlityPayment = orderFood[i].quanlity_order;
        }
      }
      accountPayment = account[checkLogin].id;
      paymentarr={id_payment,accountPayment,showDetailOrder,quanlityPayment,priceTotal,
                  name_customer,phone_customer,address_customer,bank,status};
      paymentFood.push(paymentarr);
      localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
      id_payment++;
      localStorage.setItem("id_payment", JSON.stringify(id_payment));
    
      var CheckInfo =JSON.parse(localStorage.getItem('CheckInfo'));
      if (CheckInfo == 0) {
        account_info_arr ={accountPayment,name_customer,phone_customer,address_customer,bank};
        account_info.push(account_info_arr);
        localStorage.setItem("account_info", JSON.stringify(account_info));
        CheckInfo = 1;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
        console.log(paymentFood);
      // paymentPrinf();  
      }
      for(let i = 0; i < orderFood.length; i++) {
        if (checkLogin == orderFood[i].user_id_order) {
          orderFood.splice(i, 5);
          localStorage.setItem("orderFood", JSON.stringify(orderFood));
          location.reload(); 
        }
      }   
}
/*--------------------------------------------------------------------------------------------*/
function orderPrinf(){
	document.getElementById("prinf_order").innerHTML ='';
	for(let i = 0; i < paymentFood.length; i++) {
        if (paymentFood[i].accountPayment==checkLogin) {      	
        	document.getElementById("prinf_order").innerHTML +=paymentFood[i].showDetailOrder;
        }
    }
}
/*--------------------------------------------------------------------------------------------*/
function checkorder(id){
 if (checkLogin == -1) {
    alert("Login to proceed.");
  }else {
    for(let i = 0; i < orderFood.length; i++) {
        var checkordervalue=0;
        if (id == orderFood[i].id_food && checkLogin == orderFood[i].user_id_order) {
            checkordervalue=1;
            orderFood[i].quanlity_order++;
            orderFood[i].quanlity_order;
            localStorage.setItem("orderFood", JSON.stringify(orderFood));
            orderprinf();
        }
    }if (checkordervalue==0) {
        orderpush(id);
        orderprinf();
    }
  }
}
/*--------------------------------------------------------------------------------------------*/
function orderpush(id){
var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
  id_order = id_order_food;
  var name_order = food[id].name;
  var price_order = food[id].price;
  var image_order = food[id].image;
  var note_order = food[id].note;
  var quanlity_order = 1;
  var user_id_order = checkLogin;
  var id_food = id;
  food_order = {id_order,name_order,price_order,image_order,note_order,quanlity_order,user_id_order,id_food};
  orderFood.push(food_order);

    localStorage.setItem("orderFood", JSON.stringify(orderFood));
    console.log(food_order);
    id_order_food++;
    
    localStorage.setItem("id_order_food", JSON.stringify(id_order_food));
    demOrder();
    orderprinf();
    console.log(orderFood);

}
/*--------------------------------------------------------------------------------------------*/
function demOrder(){
    var demOrder=0;
    for(let i = 0; i < orderFood.length; i++) {
        if (checkLogin == orderFood[i].user_id_order)
            demOrder++;
            document.getElementById("order_number").innerHTML =demOrder;
    }
}
/*--------------------------------------------------------------------------------------------*/
//My Cart
function orderprinf(){
    document.getElementById("prinf_order_cart").innerHTML ='';
	var orderFood =JSON.parse(localStorage.getItem('orderFood'));
        totalMoney(checkLogin);
        for(let i = 0; i < orderFood.length; i++) {
            if (checkLogin == orderFood[i].user_id_order) {
            var prinf_order_cart = 
                `<tr>  
                    <td>
                        <div>
                            <div class="cart_img_box float-left">
                                <img src="`+orderFood[i].image_order+`" width="70%" height="80%">
                            </div>
                            <div class="cart_info_box float-left pl-3">
                                <p class="mb-1 font-weight-bold" style="font-size: 100%;">`+orderFood[i].name_order+`</p>
                                <p style="font-size: 80%">`+orderFood[i].note_order+`</p>
                            </div>
                        </div> 
                    </td>
                    <td class="text-center">
                        <input id="quality_input_change`+i+`" onchange ="upQuality(`+orderFood[i].id_order+`)"          class="cart_input_quanlity mt-2" type="number" value="`+orderFood[i].quanlity_order+`" name="" min="1"            max="20" style=""> 
                    </td>
                    <td class="text-center">
                        <p class="mt-2" style="padding:5px;">P`+orderFood[i].price_order*orderFood[i].quanlity_order+`</p>
                    </td>
                    <td class="text-center">
                        <div onclick="delete_order(`+orderFood[i].id_order+`)" class="cart_button_delete">
                            <i class="fa fa-trash" aria-hidden="true" style="color: #86c232;font-size: 180%"></i>
                        </div>
                    </td>
                </tr>`
        document.getElementById("prinf_order_cart").innerHTML +=prinf_order_cart;
    }
  }
}
/*--------------------------------------------------------------------------------------------*/
//MY ORDER
var showDetailOrder;
function paymentarrpush(){

    showDetailOrder='';
    totalMoney(checkLogin);

  for(let i = 0; i < orderFood.length; i++) {
    if (checkLogin == orderFood[i].user_id_order) {

    var push_cart = `<div class="cart_img_box float-left mb-2" style="width: 80px;">
                        <img src="`+orderFood[i].image_order+`" width="100%" height="100%">
                    </div>
                    <div class="cart_info_box float-left pl-3">
                        <p class="mb-1 font-weight-bold" style="font-size: 100%;">`+orderFood[i].name_order+`</p>
                        <p style="font-size: 80%">`+orderFood[i].note_order+`</p>
                    </div>
                    <div class="quanlity" style="float: right;width: 30px;height: 30px;">
                        <p>`+orderFood[i].quanlity_order+`</p>
                    </div><div style="clear:both;"></div>`
                    showDetailOrder += push_cart;
    }
  }
}

/*--------------------------------------------------------------------------------------------*/
function paymentPrinfUser(){
    document.getElementById("prinfPaymentUser").innerHTML ='';
// totalMoney(checkLogin);
    var paymentFood =JSON.parse(localStorage.getItem('paymentFood'));
        for(let i = 0; i < paymentFood.length; i++) {
            if (checkLogin == paymentFood[i].accountPayment) {
                var prinf_payment_cart_user = `<tr style="border-bottom:1px solid #ccc;">
                    <td>
                        <p>Customer Name: `+paymentFood[i].name_customer+`</p>
                        <p>Address: `+paymentFood[i].address_customer+`</p>
                        <p>Phone Number: `+paymentFood[i].phone_customer+`</p>
                        <p>Payment Method: `+paymentFood[i].bank+`</p>
                    </td>
      
                    <td>`+paymentFood[i].showDetailOrder+`<div id="comment_box`+i+`"></div>
                    </td>
                    <td class="text-center">`+paymentFood[i].priceTotal+`</td>
                    <td class="text-center"><button id="status_prinf`+paymentFood[i].id_payment+`" onclick="suscess_payment(`+paymentFood[i].id_payment+`)" class="btn btn-warning text-white" style="background:#86c232;border:#86c232">`+paymentFood[i].status+`</button>
                    </td>
                </tr>
                <tr style="width:100%">
                </tr>`
                    document.getElementById("prinfPaymentUser").innerHTML +=prinf_payment_cart_user;
                }
        }
  }
/*--------------------------------------------------------------------------------------------*/
//Order Received
function suscess_payment(id){
    for(let i = 0; i < paymentFood.length; i++) {
      if (id == paymentFood[i].id_payment) {
        paymentFood[i].status="Received";
        localStorage.setItem("paymentFood", JSON.stringify(paymentFood));
        document.getElementById("status_prinf"+id).innerHTML = paymentFood[i].status;

        var comment_box =`<div class="p-3 pb-0" style="width: 100%;background: #ccc;">
              <div style="float: left;width: 50%">
              <label class=" text-black mb-3" style="width: 100%;">Send your Feedback</label>
              <input id="comment_text`+id+`" type="passwork" class="form-control " id="rePasswordAddInput"  style="width: 100%;background: #eee;border: 0;outline: none">
              </div>
            <div class="pt-3" style="float: right;width: 50%">
              <button onclick="sendToAdmin(`+id+`)" class="btn btn-warning float-right" style="background: #86c232;border: 1px solid #86c232;color:white">Send</button>
              <p id="support_send" class="float-left mt-4 mb-0 text-black"></p>
                </div>
               
               <div style="clear: both;"></div>
            </div>`;

        document.getElementById("comment_box"+i).innerHTML +=comment_box;
        document.getElementById("idcover"+i).value=id;
      }
    }
  }
/*--------------------------------------------------------------------------------------------*/  
function sendToAdmin(id){
  var checkLogin =JSON.parse(localStorage.getItem('checkLogin'));
  var content_comment = document.getElementById("comment_text"+id).value;
    idPayment = id;
    idUser = checkLogin;
    commentCustomerArr = {idPayment,idUser,content_comment};
    commentCustomer.push(commentCustomerArr);
    localStorage.setItem("commentCustomer", JSON.stringify(commentCustomer));
    document.getElementById("support_send").innerHTML="Feedback Sent!";
}
/*--------------------------------------------------------------------------------------------*/
//products
function listFood(){
document.getElementById("prinf_food").innerHTML ='';
var food =JSON.parse(localStorage.getItem('food'));
    for(let i = 0; i < food.length; i++) { 
    var prinf =`<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
			<div class="produre_box shadow-sm" style="background: #ddd;">
				<div class="image_box">
					<img src="`+food[i].image+`" width="100%" height="100%" style="">
				</div>
				<div class="info_box p-3">
					<p class="float-left font-weight-bold mb-0" style="font-size: 120%;">`+food[i].name+`</p>
                    <p class="float-right font-weight-bold mb-2" style="font-size: 120%">P `+food[i].price+`</p>
                <div style="clear: both;"></div>
                    <p style="font-size: 90%; height:35px;">`+food[i].note+`</p>
                    
				
					<div class="order_box float-right">
						<div onclick="checkorder(`+food[i].id+`)" class="order_button float-right pt-2">
							<i class="fa fa-plus" aria-hidden="true"></i>
						</div>
					</div>

					<div style="clear: both;"></div>
				</div>
			</div>
		</div>`;
        
    document.getElementById("prinf_food").innerHTML +=prinf;
    }
}
/*--------------------------------------------------------------------------------------------*/
function Changepassword(){
  var account =JSON.parse(localStorage.getItem('account'));
  if (document.getElementById("passcurrent").value == account[checkLogin].password && document.getElementById("passnew").value == document.getElementById("passnewrepeat").value) {
        account[checkLogin].password = document.getElementById("passnew").value;
        localStorage.setItem("account", JSON.stringify(account));  
        document.getElementById("notification_change_pass") .innerHTML= "Change Password Sucessfully!";
       
        setTimeout(() => location.reload(), 1000);

    } else {
        document.getElementById("notification_change_pass") .innerHTML= "Wrong Password, Try again.";
    }
}
/*--------------------------------------------------------------------------------------------*/
function Logout() {   
    document.getElementById("menu_account_login").style.display = 'none';
    document.getElementById("menu_login_button").style.display = 'block';
    document.getElementById("menu_logout").style.display = 'none';  
    checkLogin=-1;  
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));  
    document.getElementById("order_number").innerHTML ='0';
    document.getElementById("prinf_order_cart").innerHTML ='';
    document.getElementById("payment_form").style.display = 'none';
    document.getElementById("checkout_form").style.display = 'block';
    document.getElementById("name_customer").value='';  
	document.getElementById("phone_customer").value='';
	document.getElementById("address_customer").value='';
}
/*--------------------------------------------------------------------------------------------*/
function onloadAll(){
        paymentPrinfUser();
    	  listFood();
}
/*--------------------------------------------------------------------------------------------*/
