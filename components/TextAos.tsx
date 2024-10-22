interface TextAosProps {
  animate: string;
  duration?: string; // Optional if you want to provide a default value
  once?: string;
  text: string;
  classname?: string;
}

const TextAos = ({ animate, duration = '1000',once = 'false', text, classname }: TextAosProps) => {
  return <div data-aos={animate} data-aos-once={once} data-aos-duration={duration} className={classname}>{text}</div>;
};

export default TextAos;
