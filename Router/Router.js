const express = require("express");
const path = require('path');
const router = express.Router();
const _ = require('lodash');

// datas
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

// global arry
const data = [];

// home page
router.get('/', (req,res)=> {
    res.render('home', {home_content: homeStartingContent, data: data});
});

// about page
router.get('/about', (req,res)=> {
    res.render('about', {about_content: aboutContent})
});

// contact page
router.get('/contact', (req,res)=> {
    res.render('contact', {contact_content: contactContent})
});

// compose page
router.get('/compose', (req,res)=> {
    res.render('compose')
});

router.post('/compose', (req,res)=> {
    const Post = {
        title: req.body.post_title,
        content: req.body.post_body
    }

    data.push(Post);
    res.redirect('/')
});


router.get('/posts/:postName', (req,res)=> {
    const params = _.lowerCase(req.params.postName);
    // console.log(params);

    data.forEach((titles)=> {
        const storedTitle = _.lowerCase(titles.title);

        if (storedTitle === params) {
           res.render('post', {Title: titles.title, content: titles.content});
        }
        else{
            console.log("error");
        }
    });
})
module.exports = router;