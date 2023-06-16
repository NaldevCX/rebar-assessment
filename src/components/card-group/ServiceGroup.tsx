type ServiceGroupProps = {
  consultingIcon: string;
  developmentIcon: string;
  designIcon: string;
  analysisIcon: string;
  serviceTitle: string[];
  serviceDesc: string[];
 }

 import './index.css'

function ServiceGroup(props: ServiceGroupProps){
return(
  <div className="services-block flex">
  <div className='services-container pt-20 pb-20 mx-auto w-5/6 flex items-center '>
    <div className='service-card m-4 flex flex-col items-center'>
      <img className='service-icons' src={props.consultingIcon}></img>
      <div className="font-bold text-3xl text-3799d3">{props.serviceTitle[0]}</div >
      <p className=' pt-4 text-align-justify text-justify-inter-w'>{props.serviceDesc}</p>
    </div>
    <div className='service-card m-4 flex flex-col items-center' >
      <img  className='service-icons'  src={props.developmentIcon}></img>
      <div className="font-bold text-3xl text-3799d3">{props.serviceTitle[1]}</div >
      <p className=' pt-4 text-align-justify text-justify-inter-w'>{props.serviceDesc}</p>
    </div>
    <div className='service-card m-4 flex flex-col items-center'>
      <img className='service-icons'  src={props.designIcon}></img>
      <div className="font-bold text-3xl text-3799d3">{props.serviceTitle[2]}</div >
      <p className=' pt-4 text-align-justify text-justify-inter-w'>{props.serviceDesc}</p>
    </div>
    <div className='service-card m-4 flex flex-col items-center'>
      <img className='service-icons'  src={props.analysisIcon}></img>
      <div className="font-bold text-3xl text-3799d3">{props.serviceTitle[3]}</div >
      <p className=' pt-4 text-align-justify text-justify-inter-w'>{props.serviceDesc}</p>
    </div>
  </div>
</div>
);
}

export default ServiceGroup;