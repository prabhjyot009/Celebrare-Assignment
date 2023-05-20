//declaring cropper globally
let cropper; 

//Previewing image after loading the inputImage
function inputImagePreview(event)
{
    var image=URL.createObjectURL(event.target.files[0]);
    var previewDiv=document.getElementById('image-preview');
    var newImg=document.createElement('img');
    previewDiv.innerHTML='';
    newImg.src=image;
    newImg.width="300";
    newImg.height="300";
    previewDiv.appendChild(newImg);
    previewDiv.style.display = 'block';
    cropper = new Cropper(newImg, {
        aspectRatio: 0,
        viewMode: 16/9,
    });
    $(".editButtons").show();
    $(".finalImage").hide();
}

// Crop Button Function
document.getElementById('cropButton').addEventListener('click',function(){
    
    var croppedImage= cropper.getCroppedCanvas().toDataURL("image/png");
    document.getElementById('croppedImage').src=croppedImage;
    document.getElementById('shape').src=croppedImage;
    var popup= document.getElementById('popup');
    popup.classList.toggle('active');
    document.getElementById('mergedImage').src = croppedImage;
    cropper.destroy();
    var previewDiv=document.getElementById('image-preview');
    previewDiv.style.display = 'none';
    $(".editButtons").hide();
    document.getElementById('whiteShape').src = 'asset/blackBox.png';
});

// Rotate Button Function
document.getElementById('rotateButton').addEventListener('click', function() {
    cropper.rotate(90);
});

// Flip Horizontally Button 
document.getElementById('flipXButton').addEventListener('click', function() {
    var scaleX = cropper.getData().scaleX;
    cropper.scaleX(scaleX * -1);
});

// Flip Vertically Button
document.getElementById('flipYButton').addEventListener('click', function() {
    var scaleY = cropper.getData().scaleY;
    cropper.scaleY(scaleY * -1);
});

// Functions to get the shapes of images

//Original image (without any shape)
function original(){
    var image=document.getElementById('croppedImage');
    var shape=document.getElementById('shape');
    shape.src='asset/blackBox.png';
    const imageWidth= image.width;
    const imageHeight= image.height;

    shape.width= imageWidth;
    shape.height= imageHeight; 
    mergeImages();
    document.getElementById('mergedImage').src=image.src;
}

// user_image_frame_1.png shape
function frame1() {
    var image=document.getElementById('croppedImage');
    var shape=document.getElementById('shape');
    shape.src='asset/user_image_frame_1.png';
    const imageWidth= image.width;
    const imageHeight= image.height;

    shape.width= imageWidth;
    shape.height= imageHeight; 
    mergeImages();
}

// user_image_frame_2.png shape
function frame2() {
    var image=document.getElementById('croppedImage');
    var shape=document.getElementById('shape');
    shape.src='asset/user_image_frame_2.png';
    const imageWidth= image.width;
    const imageHeight= image.height;

    shape.width= imageWidth;
    shape.height= imageHeight; 
    mergeImages();

}

// user_image_frame_3.png shape
function frame3() {
    var image=document.getElementById('croppedImage');
    var shape=document.getElementById('shape');
    shape.src='asset/user_image_frame_3.png';
    const imageWidth= image.width;
    const imageHeight= image.height;

    shape.width= imageWidth;
    shape.height= imageHeight; 
    mergeImages();

}

// user_image_frame_4.png shape
function frame4() {
    var image=document.getElementById('croppedImage');
    var shape=document.getElementById('shape');
    shape.src='asset/user_image_frame_4.png';
    const imageWidth= image.width;
    const imageHeight= image.height;

    shape.width= imageWidth;
    shape.height= imageHeight; 
    mergeImages();

}

//showing the Final Image after blending
function finalImage(){
    document.getElementById('finalWhiteShape').src=document.getElementById('whiteShape').src;
    document.getElementById('finalMergedImage').src=document.getElementById('mergedImage').src;
    var popup= document.getElementById('popup');
    popup.classList.toggle('active');
    $(".finalImage").show();
}

// function to Merge cropped image with shape selected from functions
function mergeImages() {
    const canvas = document.getElementById('canvas');
    const originalImage = document.getElementById('croppedImage');
    canvas.width = originalImage.width;
    canvas.height = originalImage.height;
    const ctx = canvas.getContext('2d');
    
    const shape = document.getElementById('shape');
    const croppedImage = document.getElementById('croppedImage');

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(shape, 0, 0, canvas.width, canvas.height);
    const whiteShape = canvas.toDataURL('image/jpeg');
    document.getElementById('whiteShape').src = whiteShape;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
        
    ctx.drawImage(shape, 0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(croppedImage, 0, 0, canvas.width, canvas.height);

    const mergedImage = canvas.toDataURL('image/jpeg');
    document.getElementById('mergedImage').src = mergedImage;
}
  
