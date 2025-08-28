function AreaOfRectangle(length,width){

if(length<=0){
    throw new RangeError("length should be a positive number")
};
if(width<=0){
    throw new RangeError("width should be a positive number")
};


const Area = length*width;
console.log("Area of Rectangle is :",Area);
}

AreaOfRectangle(6,5);
AreaOfRectangle(500,60);
AreaOfRectangle(8,32);
AreaOfRectangle(6,23);
