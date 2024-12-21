export const ListInfoGameRule = ({
  title,
  data,
  className = 'list-disc',
}: {
  title: string;
  data: string[];
  className?: string;
}) => {
  return (
    <>
      <h3 className="text-base my-4">{title}</h3>
      <ul className={`pl-10 space-y-1 marker:text-[#948477] ${className}`}>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
};
