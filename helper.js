export function save_image_data(imageName, imageData) {
    let w = imageData.width;
    let h = imageData.height;
    let canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    let ctx = canvas.getContext("2d");
    ctx.putImageData(imageData, 0, 0);

    canvas.toBlob((blob) => {
        console.log("Saving blob");
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = imageName;
        a.click();
    }, (error) => {
        console.log("Failed to generate blob:");
        console.log(error)
    });
}