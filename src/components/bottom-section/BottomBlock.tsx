import Button from 'react-bootstrap/Button';

 type BottomBlockProps = {
  subheader: string;
  header: string;
  description: string;
  imgSrc: string;
 }

 import './index.css'

function BottomBlock(props: BottomBlockProps){
return(
  <div className="bottom-block bg-color-e5e5e4 pb-20 flex">
  <div className="bottom-container pt-10 mx-auto w-5/6 flex items-center ">
    <div className="bottom-section sd:w-1 md:w-1/2  flex flex-col sd:items-center md:items-left">
      <p className="bottom-subheader sd:text-center md:text-left">{props.subheader}</p>
      <div className="bottom-header pt-3 sd:text-center md:text-left font-extrabold text-5xl">{props.header}</div>
      <p className=" text-align-justify text-justify-inter-w sd:w-1 md:w-3/4 bottom-desc pt-3 sd:text-1xl sd:text-center md:text-left">{props.description}</p>
      <Button variant="light" className="button-white w-2/5 mt-4" size="lg">View More</Button>
    </div>
    <div className="sd:w-1  md:w-1/2 bottom-section flex flex-col items-left">
          <img src={props.imgSrc}/>
      </div>


  </div>
</div>
);
}

export default BottomBlock;