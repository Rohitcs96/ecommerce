const express  = require('express');
const app = express();
const cookeiParser = require('cookie-parser');
const path = require('path');
app.use(cookeiParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(xssProtection());
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",indexRouter);
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);
app.use("/wishlist",wishlistRouter);

app.listen(5000);