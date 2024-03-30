type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-20 flex h-[320px] w-[480px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition durantion-500 hover:opacity-90`;

  return (
    <li className='relative mx-5 inline-block h-[300px] w-[480px]'>
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
