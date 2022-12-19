import{_ as p,o as l,c,f as d,g as h,r as x,a as e,l as w,j as g,d as y,b,F as _,m as v,e as u}from"./index.dcdd4adc.js";const k={},j={src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.054245568024!2d121.5474122!3d25.0590546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x117b8e3dd14ae450!2z5YWJ6Zqc5LiJ57at56eR5oqA5pyJ6ZmQ5YWs5Y-4!5e0!3m2!1szh-TW!2stw!4v1667464415903!5m2!1szh-TW!2stw",width:"100%",height:"450px",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"};function C(t,o){return l(),c("iframe",j)}const E=p(k,[["render",C]]),B={props:["burcolor","isburimg"],setup(){const t=v("$swal"),o=d(!1);return h(()=>{const a=document.getElementById("form");document.getElementById("result"),a.addEventListener("submit",function(r){const f=new FormData(a);r.preventDefault();var i={};f.forEach((s,m)=>{i[m]=s});var n=JSON.stringify(i);o.value=!0,fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:n}).then(async s=>{await s.json(),s.status==200?(t.fire({toast:!0,showConfirmButton:!1,timer:3e3,timerProgressBar:!0,animation:!0,position:"top-end",icon:"success",title:"Success Sent mail\uFF01"}),o.value=!1):(console.log(s),t.fire({toast:!0,showConfirmButton:!1,timer:3e3,timerProgressBar:!0,animation:!0,position:"top-end",icon:"error",title:"Error"}))}).catch(s=>{t.fire({toast:!0,showConfirmButton:!1,timer:3e3,timerProgressBar:!0,animation:!0,position:"top-end",icon:"info",title:"Something went wrong!"})}).then(function(){a.reset()})})}),{loader:o}},components:{GoogleMap:E}},S={class:"w-full h-full bg-gray-900 flex justify-center items-center lg:px-6 py-24"},A={class:"w-[75%] lg:w-[50%] flex flex-col lg:flex-row space-x-0 lg:space-x-6 justify-center items-start"},T={class:"w-full lg:w-1/2"},N=u('<p class="text-white text-[12px]">Service base/information:<br>If you have business requirements, please contact us, or using the form below to info us. After receiving the message, we will contact you immediately</p><ul class="flex flex-col justify-start pt-4"><li class="text-white text-[12px] before:content-[&#39;A&#39;] before:flex flex flex-row text-[#00A0E9]"><span class="ml-2 text-white">1F., No.115, Sec. 1, Hangzhou S. Rd., Zhongzheng Dist., Taipei City , Taiwan(R.O.C)</span></li><li class="py-6 text-white text-[14px] before:content-[&#39;E&#39;] before:flex flex flex-row text-[#00A0E9]"><span class="ml-2 text-white"><a href="mailto:joe@lightmatrix3d.com">service@lightmatrix3d.com</a></span></li><li class="text-white text-[14px] before:content-[&#39;T&#39;] before:flex flex flex-row text-[#00A0E9]"><span class="ml-2 text-white"><a href="tel:0227133817">+886 2 2713-3817</a></span></li><li class="text-white text-[14px] before:content-[&#39;F&#39;] before:flex flex flex-row text-[#00A0E9]"><span class="ml-2 text-white"><a href="tel:0227133915">+886 2 2713-3915</a></span></li><li class="text-white text-[14px] before:content-[&#39;T&#39;] before:flex flex flex-row text-[#00A0E9]"><span class="ml-2 text-white">Monday to Friday 10:00-19:00</span></li></ul>',2),z={class:"w-full lg:w-1/2"},$={action:"https://api.web3forms.com/submit",id:"form",method:"POST",class:"flex flex-col space-y-6 justify-start items-end"},q=u('<input type="hidden" name="access_key" value="9220bf48-6e83-4f37-8cf9-ad5d0ab81f8f"><input type="hidden" name="subject" value="Your site has received a web message"><input type="hidden" name="from_name" value="LightMatrix"><input class="w-full bg-white bg-opacity-50 text-white text-[14px] placeholder:text-white py-2 px-6 tracking-[1px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" type="text" name="name" placeholder="Name" required><input class="w-full bg-white bg-opacity-50 text-white text-[14px] placeholder:text-white py-2 px-6 tracking-[1px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" type="email" name="email" placeholder="Email" required><input class="w-full bg-white bg-opacity-50 text-white text-[14px] placeholder:text-white py-2 px-6 tracking-[1px] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" type="tel" name="phone" placeholder="Phone No." required><textarea class="w-full bg-white bg-opacity-50 text-white text-[12px] placeholder:text-white py-2 px-6 tracking-[1px] border border-0 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2" rows="5" name="message" placeholder="Please leave your messages here." required></textarea><div class="h-captcha" data-captcha="true"></div>',8),M={type:"submit",class:"sm:mx-0 btn flex flex-row justify-center items-center"},P={key:0,class:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},F=e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),V=e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),D=[F,V],J={class:"relative bg-gray-900 w-full h-[450px]"};function O(t,o,a,r,f,i){const n=x("GoogleMap");return l(),c(_,null,[e("div",S,[e("div",A,[e("div",T,[w(t.$slots,"header"),N]),e("div",z,[e("form",$,[q,e("button",M,[r.loader?(l(),c("svg",P,D)):g("",!0),y(" Submit ")])])])])]),e("div",J,[b(n)])],64)}const Y=p(B,[["render",O]]);export{Y as C};
