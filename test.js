document.write(`
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
      
    
        <title>style 1</title>
      </head>
    <body>

        <h1 id="productTitle"></h1>
        <p id="productDescription"></p>
        <p ><span id="productPrice"></span>EGP</p>
        <img src="" id="productImg" alt="صورة المنتج" >
        <form  action="" class="text-right text-light" method="post">
<div id="errors"></div>
            <div class="form-group m-0">
                <label for="name">الاسم </label>
                <input type="text"  class="form-control" id="name" name="name" placeholder="الاسم">
            </div>
            <div class="form-group m-0">
                <label for="phone">رقم الموبايل </label>
                <input type="number"  class="form-control" id="phone" name="phone" placeholder="موبايل" >
            </div>
            <div class="form-group m-0">
                <label for="address">العنوان </label>
                <input type="text"  class="form-control" id="address" name="address" placeholder="العنوان" >
            </div>
            <div class="form-group m-0">
                <label for="quantity">الكمية </label>
                <input type="number"  class="form-control" id="quantity" name="quantity" placeholder="الكمية ">
            </div>
            <button type="submit" class="btn mt-5 btn-primary" id="btnConfirm">اججز الان</button>
            </form>
    </body>


</html>`);
