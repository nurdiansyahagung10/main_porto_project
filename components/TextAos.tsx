interface TextAosProps {
    animate: string;
    duration?: string; // Optional if you want to provide a default value
    text: string;
    classname? : string; 
  }
  
  const TextAos = (TextAosProps:any) => {
    return <div data-aos={TextAosProps.animate} data-aos-duration={TextAosProps.duration} className={TextAosProps.classname}>{TextAosProps.text}</div>;
  };
  
  export default TextAos;
  