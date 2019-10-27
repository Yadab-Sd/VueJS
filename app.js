// only read , not run automatically untill call 


var vi = new Vue({ // creating an instance of Vue (lineked via script of unpkg)
  el: "#our-app", // This instace of Vue handaling our-app element, outside of this, vue unable to handle
  data:{
    message: "This is our first vue app",   //
    fname: "Yadab",                         //   variables, can be used insite #our-app element
    url: "http://yadab.us/",
    imgSrc: "yadab.jpg",
    imgClassVue: true,
    iname:"XYZ",
    ipass:"123",
    cont:"<p style='color:red;'>Sorry, Wrong ... </p>",
    warn: "none"
  },
  methods:{ // data and methods are obejects
    run: function(m){
      return "I'm running " + m + ", From URL:                       " + this.url
    },
    validate: function(e){
      this.warn="block"
    }
  }
});