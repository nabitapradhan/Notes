var subImgs= document.getElementsByClassName("smallImg");
console.log(subImgs);
var index=0;
function Carousel()
{
	mainImg.src=subImgs[index].src;
	index++;
	if(index>=subImgs.length)
	{
		index=0;
	}
	setTimeout(Carousel,2000);

}
Carousel();